// Mobile menu
function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('open');
}

// Lessons filter
function filterSubject(subject, btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.class-card').forEach(card=>{
    card.style.display = (subject==='all'||card.dataset.subject.includes(subject)) ? 'block' : 'none';
  });
}

// Lesson chapter select
function selectChapter(el, title){
  document.querySelectorAll('.chapter-item').forEach(i=>i.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('lessonTitle').textContent = title;
}

// Mark lesson complete
function markDone(){
  const completed = JSON.parse(localStorage.getItem('completed')||'[]');
  const title = document.getElementById('lessonTitle').textContent;
  if(!completed.includes(title)){
    completed.push(title);
    localStorage.setItem('completed', JSON.stringify(completed));
  }
  alert('✅ Lesson marked as complete!');
}

// Profile save
function saveProfile(){
  const name = document.getElementById('nameInput').value;
  const cls = document.getElementById('classInput').value;
  if(name) document.getElementById('studentName').textContent = name;
  if(cls) document.getElementById('studentClass').textContent = cls+' · All Subjects';
  localStorage.setItem('profile', JSON.stringify({name, cls}));
  alert('✅ Profile saved!');
}

// Contact form
function submitForm(e){
  e.preventDefault();
  document.getElementById('formSuccess').style.display='block';
  e.target.reset();
}

// Load profile on profile page
window.addEventListener('load', ()=>{
  const p = JSON.parse(localStorage.getItem('profile')||'{}');
  if(p.name && document.getElementById('studentName')){
    document.getElementById('studentName').textContent = p.name;
    document.getElementById('studentClass').textContent = (p.cls||'')+'  · All Subjects';
  }
  const completed = JSON.parse(localStorage.getItem('completed')||'[]');
  if(document.getElementById('completedCount')){
    document.getElementById('completedCount').textContent = completed.length;
  }
});
