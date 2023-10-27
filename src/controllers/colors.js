const Color = require('../models/Color');

exports.getColorSuggestion = async (req, res) => {
  try {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const color = await Color.findOne({ name: randomColor });
    if (!color) {
      return res.status(404).json({ message: 'Color not found' });
    }

    res.status(200).json({ color: color.name, image: color.image });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
