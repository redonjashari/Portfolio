import React from "react";
import mock03 from '../assets/images/assembly.jpeg';
import mock04 from '../assets/images/Restaurant.png';
import mock05 from '../assets/images/Hazard.jpg';
import mock06 from '../assets/images/ticketmeister.png';
import mock07 from '../assets/images/ShopLane.png';
import mock08 from '../assets/images/Hazard.jpg';
import mock09 from '../assets/images/openAI.jpeg';
import mock10 from '../assets/images/Contix.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/redonjashari/contix" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="Contix project thumbnail"/></a>
                <a href="https://github.com/redonjashari/contix" target="_blank" rel="noreferrer"><h2>Contix</h2></a>
                <p>Developed a concert ticket platform featuring ticket inventory, seat selection and payment processing using Node.js, Fastify, Prisma, TypeScript & Docker.</p>
            </div>
            <div className="project">
                <a href="https://github.com/redonjashari/GPT-2-Refined" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="GPT-2 Refined project thumbnail"/></a>
                <a href="https://github.com/redonjashari/GPT-2-Refined" target="_blank" rel="noreferrer"><h2>GPT-2 Refined</h2></a>
                <p>Reproduced the GPT-2 (124M) architecture using PyTorch, building the full training/inference pipeline, tests, and CLI packaging.</p>
            </div>
            <div className="project">
                <a href="https://github.com/redonjashari/HazardDetectionUnit" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="Hazard Detection Unit project thumbnail"/></a>
                <a href="https://github.com/redonjashari/HazardDetectionUnit" target="_blank" rel="noreferrer"><h2>Hazard Detection Unit</h2></a>
                <p>Engineered a fully functional MIPS hazard detector in Python that parses assembly and identifies register read/write dependencies, RAW, load-use, and control hazards.</p>
            </div>
            <div className="project">
                <a href="https://github.com/redonjashari/ShopLane" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="ShopLane project thumbnail"/></a>
                <a href="https://github.com/redonjashari/ShopLane" target="_blank" rel="noreferrer"><h2>ShopLane</h2></a>
                <p>Developed a production-ready e-commerce platform using Next.js, Prisma, Tailwind, TypeScript, and Stripe, featuring SSR pages, secure checkout, and a scalable modular architecture.</p>
            </div>
            <div className="project">
                <a href="https://github.com/redonjashari/ticketmeister" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="Ticketmeister project thumbnail"/></a>
                <a href="https://github.com/redonjashari/ticketmeister" target="_blank" rel="noreferrer"><h2>Ticketmeister</h2></a>
                <p>Created a platform to manage ticketing across all campus events using HTML5, JS, CSS, Flask. Deployed it on a private university server.</p>
            </div>
            <div className="project">
                <a href="https://github.com/redonjashari/2-bit-Branch-Predictor" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="2-bit Branch Predictor project thumbnail"/></a>
                <a href="https://github.com/redonjashari/2-bit-Branch-Predictor" target="_blank" rel="noreferrer"><h2>2-bit Branch Predictor</h2></a>
                <p>Enginnered a MIPS 2-bit branch predictor simulator in C++: models a bimodal 2-bit saturating counter to predict taken/not-taken, tracks prediction accuracy, and logs dynamic branch behavior for analysis and learning.</p>
            </div>
            <div className="project">
                <a href="https://github.com/redonjashari/Restaurant-Website" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="Restaurant Website project thumbnail"/></a>
                <a href="https://github.com/redonjashari/Restaurant-Website" target="_blank" rel="noreferrer"><h2>Restaurant-Website</h2></a>
                <p>Designed a Restaurant Website for a family business using React, TypeScript, Vite, Tailwind</p>
            </div>
            <div className="project">
                <a href="https://github.com/redonjashari/AsmCompiler" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="Assembly Compiler project thumbnail"/></a>
                <a href="https://github.com/redonjashari/AsmCompiler" target="_blank" rel="noreferrer"><h2>Assembly Compiler</h2></a>
                <p>Developed an Assembly Compiler in Python to translate assembly code into Hack machine instructions, as part of a Digital Systems and Computer Architecture course. Included comprehensive test files to ensure correctness.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;