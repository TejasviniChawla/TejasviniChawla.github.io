// DOM Ready
$(document).ready(function() {
  // Navigation active state
  highlightNavOnScroll();
  
  // Project filtering
  initProjectFilter();
  
  // Editorial filtering
  initEditorialFilter();
  
  // Load projects
  loadProjects();
  
  // Load editorials
  loadEditorials();
  
  // Smooth scrolling for nav links
  smoothScrolling();
  
  // Form submission
  initContactForm();
});

function highlightNavOnScroll() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      link.classList.toggle('inSection', href === current);
    });
  });
}

// Init project filter
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Filter projects
      const filter = btn.getAttribute('data-filter');
      filterProjects(filter);
    });
  });
}

// Filter projects based on category
function filterProjects(filter) {
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach(project => {
    if (filter === 'all') {
      project.style.display = 'block';
    }
    else if (project.classList.contains(filter)) {
      project.style.display = 'block';
    }
    else {
      project.style.display = 'none';
    }
  });
}

// Init editorial filter
function initEditorialFilter() {
  const filterBtns = document.querySelectorAll('#editorials .filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Filter editorials
      const filter = btn.getAttribute('data-filter');
      filterEditorials(filter);
    });
  });
}

// Filter editorials based on category
function filterEditorials(filter) {
  const editorials = document.querySelectorAll('.editorial-card');
  
  editorials.forEach(editorial => {
    if (filter === 'all') {
      editorial.style.display = 'block';
    }
    else if (editorial.classList.contains(filter)) {
      editorial.style.display = 'block';
    }
    else {
      editorial.style.display = 'none';
    }
  });
}

// Load projects from data
function loadProjects() {
  // Project data
  const projects = [
    {
      title: "AI-Powered Student Mentor",
      image: "/api/placeholder/400/300",
      category: "ai",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      description: "An AI-powered platform that helps university students find mentors and resources based on their academic needs and learning style.",
      links: [
        { text: "View Demo", url: "#" },
        { text: "GitHub", url: "#" }
      ]
    },
    {
      title: "Climate Change Visualization Dashboard",
      image: "/api/placeholder/400/300",
      category: "web",
      technologies: ["JavaScript", "D3.js", "React", "Node.js"],
      description: "Interactive dashboard visualizing climate change data with predictive models and actionable insights for policymakers.",
      links: [
        { text: "Live Demo", url: "#" },
        { text: "GitHub", url: "#" }
      ]
    },
    {
      title: "Health Tracking Mobile App",
      image: "/api/placeholder/400/300",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Expo"],
      description: "A cross-platform mobile application for tracking health metrics, exercise routines, and nutritional intake with personalized insights.",
      links: [
        { text: "App Store", url: "#" },
        { text: "GitHub", url: "#" }
      ]
    },
    {
      title: "Smart Home Energy Management",
      image: "/api/placeholder/400/300",
      category: "ai",
      technologies: ["Python", "IoT", "Machine Learning", "React"],
      description: "An AI system that optimizes energy usage in smart homes by learning user patterns and environmental conditions.",
      links: [
        { text: "Case Study", url: "#" },
        { text: "GitHub", url: "#" }
      ]
    },
    {
      title: "E-commerce Platform",
      image: "/api/placeholder/400/300",
      category: "web",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      description: "A full-stack e-commerce platform with advanced filtering, secure payments, and inventory management.",
      links: [
        { text: "Live Site", url: "#" },
        { text: "GitHub", url: "#" }
      ]
    },
    {
      title: "Augmented Reality Campus Tour",
      image: "/api/placeholder/400/300",
      category: "mobile",
      technologies: ["Unity", "ARKit", "C#"],
      description: "An AR mobile app that provides interactive tours of university campuses for prospective students.",
      links: [
        { text: "Demo Video", url: "#" },
        { text: "GitHub", url: "#" }
      ]
    }
  ];

    // Get the projects container
    const projectsGrid = document.getElementById('projects-grid');
    
    // Clear existing content
    projectsGrid.innerHTML = '';
    
    // Add projects to the grid
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.category}`;
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    ${project.links.map(link => `<a href="${link.url}" class="project-link">${link.text}</a>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}


// Load editorials from data
function loadEditorials() {
  // Editorial data
  const editorials = [
    {
      title: "The Future of AI in Education",
      image: "/api/placeholder/400/300",
      category: "personal",
      date: "February 15, 2025",
      tags: ["AI", "Education", "Technology"],
      summary: "Exploring how artificial intelligence is transforming educational experiences and creating new opportunities for personalized learning.",
      links: [
        { text: "Read More", url: "#" },
        { text: "Discussion", url: "#" }
      ]
    },
    {
      title: "Ethical Considerations in Software Development",
      image: "/api/placeholder/400/300",
      category: "hackathons",
      date: "January 28, 2025",
      tags: ["Ethics", "Software", "Development"],
      summary: "Discussing the importance of ethical frameworks and practices in modern software development lifecycles.",
      links: [
        { text: "Read More", url: "#" },
        { text: "Code Example", url: "#" }
      ]
    },
    {
      title: "Women in STEM: Challenges and Triumphs",
      image: "/api/placeholder/400/300",
      category: "personal",
      date: "December 12, 2024",
      tags: ["Women", "STEM", "Diversity"],
      summary: "Reflecting on the experiences of women in technology fields and the importance of diversity in innovation.",
      links: [
        { text: "Read More", url: "#" },
        { text: "Related Research", url: "#" }
      ]
    },
    {
      title: "Solving Dynamic Programming Problems",
      image: "/api/placeholder/400/300",
      category: "leetcode",
      date: "November 5, 2024",
      tags: ["Algorithms", "LeetCode", "DP"],
      summary: "A comprehensive guide to approaching and solving dynamic programming problems with examples from LeetCode.",
      links: [
        { text: "Read More", url: "#" },
        { text: "Practice Problems", url: "#" }
      ]
    },
    {
      title: "Hackathon Experience: Building a Smart City Solution",
      image: "/api/placeholder/400/300",
      category: "hackathons",
      date: "October 15, 2024",
      tags: ["Hackathon", "IoT", "Smart City"],
      summary: "My experience participating in a 48-hour hackathon where we built a solution for traffic management in smart cities.",
      links: [
        { text: "Read More", url: "#" },
        { text: "Project Demo", url: "#" }
      ]
    }
  ];

    // Get the editorials container
    const editorialsGrid = document.getElementById('editorials-grid');
    
    // Clear existing content
    editorialsGrid.innerHTML = '';
    
    // Add editorials to the grid
    editorials.forEach(editorial => {
        const editorialCard = document.createElement('div');
        editorialCard.className = `editorial-card ${editorial.category}`;
        
        editorialCard.innerHTML = `
            <img src="${editorial.image}" alt="${editorial.title}" class="editorial-img">
            <div class="editorial-info">
                <h3 class="editorial-title">${editorial.title}</h3>
                <p class="editorial-date">${editorial.date}</p>
                <div class="editorial-category">
                    ${editorial.categories ? editorial.categories.map(cat => `<span class="editorial-category-tag">${cat}</span>`).join('') : ''}
                </div>
                <p class="editorial-summary">${editorial.summary}</p>
                <div class="editorial-links">
                    ${editorial.links ? editorial.links.map(link => `<a href="${link.url}" class="editorial-link">${link.text}</a>`).join('') : ''}
                </div>
            </div>
        `;
        
        editorialsGrid.appendChild(editorialCard);
    });
}

// Smooth scrolling implementation
function smoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Contact form handling
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Reset form
    this.reset();
    
    // Show success message
    alert('Thank you for your message! I\'ll respond within 48 hours.');
  });
}
