<script setup>
import profileImage from '@/assets/profile_angelene.png'
</script>

<template>
  <section class="profile">
    <div class="profile-content">
      <div class="text">
        <h2 class="heading">PROFILE</h2>
        <ul class="details">
          <li><strong>Name:</strong> Angelene Guiao</li>
          <li><strong>Course:</strong> Bachelor of Science in Information Technology</li>
          <li><strong>Specialization:</strong> Web Development</li>
          <li>
            <strong>Objective:</strong>
            <span>
              To utilize my BSIT background in developing secure, reliable, and user-friendly systems that not only meet organizational goals but also positively impact communities and society.
            </span>
          </li>
        </ul>
      </div>

      <div class="image">
        <img :src="profileImage" alt="Angelene Guiao" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem 2.5rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  color: #2c3e50;
}

.profile-content {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.text {
  flex: 1;
  min-width: 250px;
}

.image img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.heading {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #34495e;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.details {
  list-style: none;
  padding: 0;
  font-size: 1.1rem;
  line-height: 1.8;
}

.details li {
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.details li:hover {
  background-color: #eaf4fc;
  transform: translateX(5px);
  cursor: pointer;
  border-radius: 4px;
  padding-left: 0.5rem;
}

.details strong {
  color: #2980b9;
  font-weight: 600;
}

.details span {
  display: block;
  margin-top: 0.5rem;
  color: #555;
}
</style>
