const express = require('express');
const projectsController = require('../controllers/projects')

const router = express.Router();

// TODO: update response codes, actual data returned, negative flows

// getAllProjects
router.get('/getAllProjects', projectsController.getAllProjects, (req, res) => {
  res.status(200).json(res.locals.data);
});

// get all members for a project
router.get('/getMembers/:projectId', projectsController.getMembers, (req, res) => {
  res.status(200).json(res.locals.data);
});

// add a member to a project
router.post('/addMember', projectsController.addMember, (req, res) => {
  res.status(200).json(res.locals.data);
});

// update members for a project
router.post('/updateMembers', projectsController.updateMembers, (req, res) => {
  res.status(200).json(res.locals.data);
});

// remove a member from a project
router.delete('/removeMember', projectsController.removeMember, (req, res) => {
  res.status(200).json(res.locals.data);
});

// create a project
// --> automatically create a new memberlist
router.post('/create', projectsController.create, (req, res) => {
  res.status(200).json(res.locals.data);
});

// get project details
router.get('/:projectId', projectsController.get, (req, res) => {
  res.status(200).json(res.locals.data);
});

// update project details
router.post('/update', projectsController.update, (req, res) => {
  res.status(200).json(res.locals.data);
});

// delete a project
router.delete('/delete', projectsController.delete, (req, res) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
