import { useState, useMemo } from 'react';
import {DORKS_DATABASE}  from './data/dorks';

type Dork = {
    dork: string;
    description: string;
 };

 
export default function GoogleDorksCheatSheet() {
    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredDorks = useMemo(() => {
        const results: { [key: string]: any[] } = {};
      if (!searchTerm.trim()) return DORKS_DATABASE;
      
      Object.entries(DORKS_DATABASE).forEach(([category, dorks]) => {
        const filtered = dorks.filter(dork => 
          dork.dork.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dork.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filtered.length > 0) {
          results[category] = filtered;
        }
      });
      return results;
    }, [searchTerm]);
  
    const executeGoogleDork = (dork: string) => {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(dork)}`, '_blank');
     };
  
    return (
      <div className="container">
        <h1>Google Dorks Cheat Sheet</h1>
        <p className="subtitle">Based on EC-Council's Ethical Hacking Guide</p>
        
        <div className="input-group">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for Google dorks..."
            className="search-input"
          />
        </div>
  
        <div className="dorks-grid">
          {Object.entries(filteredDorks).map(([category, dorks]) => (
            <div key={category} className="dork-category">
              <h3>{category}</h3>
              <ul>
                {dorks.map((dork, index) => (
                  <li key={index} className="dork-item">
                    <div className="dork-content">
                      <div className="dork-text">{dork.dork}</div>
                      <div className="dork-description">{dork.description}</div>
                    </div>
                    <button 
                      onClick={() => executeGoogleDork(dork.dork)}
                      className="execute-button"
                    >
                      Execute 🔍
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        <footer>
          <p>
            ⚠️ For educational purposes only. Use responsibly and ethically.
          </p>
          <p>
                À des fins pédagogiques uniquement. Utiliser de manière responsable et éthique.
          </p>
          <p>
            View source on <a href='https://ilimi-tech.com' target="_blank" rel="noopener noreferrer" >ilimiTech</a>
          </p>
        </footer>
      </div>
    );
  }