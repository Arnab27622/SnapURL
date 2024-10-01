const URL = require('../models/url.js');

async function createShortURL(req, res) {
    try {
        const { nanoid } = await import('nanoid');
        const shortId = nanoid(6);
        const body = req.body;
        const user = req.user
        const urls = await URL.find({ createdBy: req.user._id });

        if (!body.url) {
            return res.status(400).json({ success: false, msg: 'URL is required' });
        }

        if (!user || !user._id) {
            return res.status(403).json({ success: false, msg: 'User not authenticated' });
        }

        await URL.create({
            shortId: shortId,
            redirectURL: body.url,
            visitHistory: [],
            createdBy: req.user._id
        });

        return res.status(201).render('homepage', {
            id: shortId,
            user,
            urls
        });
    } catch (error) {
        return res.status(500).json({ success: false, msg: 'Server error', error: error.message });
    }
}

async function getOriginal(req, res) {
    try {
        const shortId = req.params.id;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({ success: false, msg: 'URL not found' });
        }

        return res.redirect(entry.redirectURL);
    } catch (error) {
        return res.status(500).json({ success: false, msg: 'Server error', error: error.message });
    }
}

module.exports = {
    createShortURL,
    getOriginal
};