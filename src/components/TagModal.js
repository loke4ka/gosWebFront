import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TagModal.module.css';

const TagModal = ({ onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tags/');
        setAllTags(response.data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };
    fetchTags();
  }, []);


  const handleAddCustomTag = () => {
    if (inputValue.trim()) { // Проверяем, что значение не пустое
      setSelectedTags([...selectedTags, inputValue]); // Добавляем значение в список выбранных тегов
      setInputValue(''); // Очищаем поле ввода
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase(); // Приводим значение к нижнему регистру
    setInputValue(value);
  };
  

  const handleTagSelect = (tag) => {
    setSelectedTags([...selectedTags, tag]);
    setInputValue('');
  };

  const handleTagRemove = (tag) => {
    const updatedTags = selectedTags.filter(t => t !== tag);
    setSelectedTags(updatedTags);
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.post('http://your-api-url/save-tags', { tags: selectedTags });
      console.log('Changes saved successfully:', response.data);
      onClose();
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Edit Tags</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter tag..."
        />
        <button onClick={handleAddCustomTag}>Add Custom Tag</button>
        <div className={styles.tagList}>
          {allTags.map(tag => (
            <div
              key={tag.id}
              className={styles.tag}
              onClick={() => handleTagSelect(tag.name)}
            >
              {tag.name}
            </div>
          ))}
        </div>
        <div className={styles.selectedTagList}>
          {selectedTags.map(tag => (
            <div
              key={tag}
              className={`${styles.tag} ${styles.selectedTag}`}
              onClick={() => handleTagRemove(tag)}
            >
              {tag} (remove)
            </div>
          ))}
        </div>
        <button onClick={handleSaveChanges}>Save Changes</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TagModal;
