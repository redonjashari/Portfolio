import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "Prisma",
    "Tailwind",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "FastAPI",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Linux",
    "Kubernetes",
    "Redis",
    "MLflow",
    "ONNX",
    "TorchScript",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "PyTorch",
    "Hugging Face",
    "LlamaIndex",
    "TensorFlow",
    "scikit-learn",
    "NumPy",
    "Pandas",
    "Pinecone",
    "FastAPI",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built full-stack projects end-to-end: responsive React/TypeScript frontends and Flask/FastAPI or Node.js backends with PostgreSQL/Prisma. Through coursework and personal builds I’ve implemented auth, REST APIs, and basic testing, then containerized and deployed small apps to the cloud.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Backend, Cloud & MLOps</h3>
                    <p>I build and ship project backends end-to-end: containerized APIs, basic CI/CD, and cloud deployments. Through class and personal projects I’ve used GitHub Actions, Docker, and AWS to stand up services, add simple monitoring/caching, and practice MLOps basics like experiment tracking and reproducible runs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I prototype AI features and small ML systems in projects: data prep with NumPy/Pandas, classical models with scikit-learn, and deep learning with PyTorch/TensorFlow. I’ve integrated LLMs (OpenAI/Hugging Face) into apps using LangChain/LlamaIndex, built simple RAG demos with Pinecone, and served models via FastAPI.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;