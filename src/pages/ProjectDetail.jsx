import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_BASE_URL } from '../apiConfig';
import '../styles.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/projects/${id}`);
                if (!response.ok) {
                    throw new Error('Project not found');
                }
                const data = await response.json();
                setProject(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        return <div className="project-detail-container"><h1>Loading...</h1></div>;
    }

    if (error) {
        return (
            <div className="project-detail-container">
                <h1>Error: {error}</h1>
                <Link to="/projects" className="back-button">&larr; Back to Project List</Link>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="project-detail-container">
                <h1>Project Not Found</h1>
                <Link to="/projects" className="back-button">&larr; Back to Project List</Link>
            </div>
        );
    }

    return (
        <div className="project-detail-container">
            <h1>Project: {project.title}</h1>
            <p><strong>ID:</strong> {project._id}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Description:</strong> {project.description || 'No description provided.'}</p>
            <Link to="/projects" className="back-button">&larr; Back to Project List</Link>
        </div>
    );
};

export default ProjectDetail;