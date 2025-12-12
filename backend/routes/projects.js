const express = require('express');
const router = express.Router();
const ProjectLog = require('../models/ProjectLog'); // Adjust path if necessary

// GET all ProjectLog entries
router.get('/', async (req, res) => {
  try {
    const projects = await ProjectLog.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE a new ProjectLog entry
router.post('/', async (req, res) => {
  const project = new ProjectLog({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status || 'Pending',
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET a single ProjectLog entry by ID
router.get('/:id', async (req, res) => {
    try {
        const project = await ProjectLog.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE a ProjectLog entry
router.delete('/:id', async (req, res) => {
  try {
    const project = await ProjectLog.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a ProjectLog entry
router.patch('/:id', async (req, res) => {
  try {
    const project = await ProjectLog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
