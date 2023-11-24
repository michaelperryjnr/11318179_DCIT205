function handleLevelClick(levels, tables, previousIndex) {
  levels.forEach((level, index) => {
    level.addEventListener('click', () => {
      tables.forEach((table, tableIndex) => {
        table.style.display = tableIndex <= index ? 'block' : 'none';
      });
      if (previousIndex !== -1 && previousIndex !== index) {
        tables[previousIndex].style.display = 'none';
      }
      previousIndex = index;
    });
  });
}

const levelsCS = document.querySelectorAll('[id^="levelcs"]');
const tablesCS = document.querySelectorAll('[id^="tablecs"]');
let previousIndexCS = -1;
handleLevelClick(levelsCS, tablesCS, previousIndexCS);

const levelsIT = document.querySelectorAll('[id^="levelit"]');
const tablesIT = document.querySelectorAll('[id^="tableit"]');
let previousIndexIT = -1;
handleLevelClick(levelsIT, tablesIT, previousIndexIT);

window.addEventListener('load', () => {
  tablesCS[0].style.display = 'block';
  tablesIT[0].style.display = 'block';
});
