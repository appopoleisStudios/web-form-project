document.getElementById('profileForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const spokenLanguages = [...document.querySelectorAll('input[name="spokenLanguages"]:checked')].map(i => i.value);
    const yearsExperience = parseInt(document.getElementById('yearsExperience').value);
    const blockchainExperience = document.getElementById('blockchainExperience').value;
  
    const languages = document.querySelectorAll('input[name="language[]"]');
    const profs = document.querySelectorAll('select[name="proficiency[]"]');
    const codingLanguages = {};
  
    for (let i = 0; i < languages.length; i++) {
      const lang = languages[i].value.trim();
      const level = profs[i].value;
      if (lang && level) {
        codingLanguages[lang] = level;
      }
    }
  
    // Validation
    if (spokenLanguages.length === 0) {
      document.getElementById('error').innerText = 'Please select at least one spoken language.';
      return;
    }
  
    if (Object.keys(codingLanguages).length === 0) {
      document.getElementById('error').innerText = 'Please add at least one coding language with proficiency.';
      return;
    }
  
    document.getElementById('error').innerText = '';
  
    const data = {
      fullName,
      email,
      spokenLanguages,
      codingLanguages,
      yearsExperience,
      blockchainExperience,
    };
  
    try {
      const res = await fetch('/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'your-secret-key' // Replace with your actual key
        },
        body: JSON.stringify(data)
      });
  
      const result = await res.json();
      if (result.success) {
        alert('Profile submitted successfully!');
        document.getElementById('profileForm').reset();
      } else {
        document.getElementById('error').innerText = result.errors?.join(', ') || 'Submission failed.';
      }
    } catch (err) {
      console.error(err);
      document.getElementById('error').innerText = 'An error occurred while submitting.';
    }
  });
  
  function addLanguage() {
    const div = document.createElement('div');
    div.className = 'lang-group';
    div.innerHTML = `
      <input type="text" name="language[]" placeholder="Language (e.g. Python)" required />
      <select name="proficiency[]" required>
        <option value="">Select Proficiency</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    `;
    document.getElementById('codingLanguages').appendChild(div);
  }
  