exports.getTest = async (req, res) => {
    res.status(200).json({
        data: 'Test Api is working',
    });
};
