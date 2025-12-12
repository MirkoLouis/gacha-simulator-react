import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { API_BASE_URL } from '../apiConfig';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/projects`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError(err.message);
                console.error("Failed to fetch projects:", err);
            }
        };

        fetchProjects();
    }, []);

    const handleCreate = async (e) => {
        e.preventDefault();
        if (!newTitle.trim() || !newDescription.trim()) {
            alert("Both Title and Description are required.");
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newTitle, description: newDescription }),
            });
            if (!response.ok) {
                throw new Error('Failed to create project');
            }
            const newProject = await response.json();
            setProjects(prevProjects => [newProject, ...prevProjects]);
            setNewTitle('');
            setNewDescription('');
        } catch (err) {
            setError(err.message);
            console.error("Failed to create project:", err);
        }
    };

    const getNextStatus = (currentStatus) => {
        switch (currentStatus) {
            case 'Pending': return 'In Progress';
            case 'In Progress': return 'Completed';
            case 'Completed': return 'Pending';
            default: return 'Pending';
        }
    };

    const handleUpdateStatus = async (id, newStatus) => {
        try {
            const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });
            if (!response.ok) {
                throw new Error('Failed to update project status');
            }
            const updatedProject = await response.json();
            setProjects(prevProjects =>
                prevProjects.map(p => (p._id === id ? updatedProject : p))
            );
        } catch (err) {
            setError(err.message);
            console.error("Failed to update status:", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok && response.status !== 204) {
                throw new Error('Failed to delete project');
            }
            setProjects(prevProjects => prevProjects.filter(p => p._id !== id));
        } catch (err) {
            setError(err.message);
            console.error("Failed to delete project:", err);
        }
    };

    if (error) {
        return <div className="project-page-container"><h1>Error: {error}</h1></div>;
    }

    return (
        <div className="project-page-container">
            <div className="project-layout-container">
                <div className="project-log-main">
                    <h1 className="project-log-title">Project Log</h1>
                    <div className="project-grid">
                        {projects.map(project => (
                            <div key={project._id} className="project-card">
                                <div className="project-card-content">
                                    <Link to={`/projects/${project._id}`} className="project-title-link">
                                        <h2>{project.title}</h2>
                                    </Link>
                                    <p><strong>Status:</strong> {project.status}</p>
                                    <p className="project-description">
                                        {project.description || 'No description available.'}
                                    </p>
                                </div>
                                <div className="project-card-actions">
                                    <button 
                                        className="status-button"
                                        onClick={() => handleUpdateStatus(project._id, getNextStatus(project.status))}
                                    >
                                        Next Status
                                    </button>
                                    <button 
                                        className="delete-button"
                                        onClick={() => handleDelete(project._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="create-project-card">
                    <h2>Create New Project</h2>
                    <form onSubmit={handleCreate}>
                        <input
                            type="text"
                            placeholder="Project Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Project Description"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            required
                        />
                        <button type="submit">Create Project</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;