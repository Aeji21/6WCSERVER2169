<template>
  <section class="skills-card">
    <h2 class="heading">Skills</h2>
    <ul class="skills-list">
      <li><span class="label">Training:</span> Web Development Bootcamp</li>
      <li><span class="label">Seminars:</span> Cybersecurity Awareness</li>
      <li><span class="label">Technologies:</span> Git, Linux, Docker</li>
      <li><span class="label">Programming Languages:</span> PHP, JavaScript, Python</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Skills"
}
</script>

<style scoped>
.skills-card {
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem 2.5rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  color: #2c3e50;
}

.heading {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: #34495e;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.skills-list {
  list-style: none;
  padding: 0;
  font-size: 1.1rem;
  line-height: 1.8;
}

.skills-list li {
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  border-left: 4px solid #3498db;
  background-color: #f4f6f8;
  border-radius: 4px;
}

.label {
  font-weight: 600;
  color: #2980b9;
}

.education-list li:hover,
.skills-list li:hover {
  background-color: #eaf4fc;
  transform: translateX(5px);
  transition: all 0.3s ease;
  cursor: pointer;
}

</style>
