export async function fetchExercises() {
  const exerciseRes = await fetch('https://wger.de/api/v2/exerciseinfo/?language=2&limit=100');
  if (!exerciseRes.ok) {
    throw new Error('Failed to fetch exercises');
  }
  const exerciseData = await exerciseRes.json();
  const imageRes = await fetch('https://wger.de/api/v2/exerciseimage/?limit=500');
  if (!imageRes.ok) {
    throw new Error('Failed to fetch exercise images');
  }
  const imageData = await imageRes.json();
  const imageMap = {};
  imageData.results.forEach(img => {
    if (!imageMap[img.exercise]) {
      imageMap[img.exercise] = img.image;
    }
  });
  return exerciseData.results.map(ex => {
    const translation = ex.translations && ex.translations[0] ? ex.translations[0] : {};
    return {
      id: ex.id,
      name: translation.name || ex.name || '',
      description: translation.description || ex.description || '',
      category: ex.category ? ex.category.name : '',
      muscles: ex.muscles.map(m => m.name),
      equipment: ex.equipment.map(eq => eq.name),
      imageUrl: imageMap[ex.id] || ''
    };
  });
}