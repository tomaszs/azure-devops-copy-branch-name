String.prototype.titleCase = function() {
   const splitStr = this.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

String.prototype.splitByMany = function(manyArgs) {
  let string = this;
  do {
    let arg = manyArgs.pop()
    string = this.replace(arg, manyArgs[0])
  } while (manyArgs.length > 2)
  return string.split(manyArgs[0])
}

String.prototype.replaces = function(str, replace, incaseSensitive) {
    if (!incaseSensitive){
        return this.split(str).join(replace);
    } else { 
        var strLower = this.toLowerCase();
        var findLower = String(str).toLowerCase();
        var strTemp = this.toString();

        var pos = strLower.length;
        while((pos = strLower.lastIndexOf(findLower, pos)) != -1){
            strTemp = strTemp.substr(0, pos) + replace + strTemp.substr(pos + findLower.length);
            if (pos == 0) break;
            pos--;
        }
        return strTemp;
    }
};

String.prototype.removeUnnecessaryWords = function() {
    const badWords = ` : \` ' [ ] " \` * update use always fix do not error investigate
        referenceerror implement functionality the npm package remove accessing set
        initial issue with of replace to users for to`;
    let text = this;
    badWords.splitByMany([' ', '\\n']).forEach((word) => {
        if (word.trim() == '') return;
        
        text = text.replaces(`${word.trim()} `, ' ', true)
    });
    
    return text.trim();
}

function constructBranchAndTicketName() {
    const storyId = document.querySelector('.work-item-form-id').innerText;
    const storyNameImportantWords = document.querySelector('#witc_1_txt')
        .value
        .removeUnnecessaryWords();
    
    const branchDescriptor = storyNameImportantWords
        .toLowerCase()
        .replace(/ /g, '-')
        .substring(0, 10)
        
    ticketDescriptor = storyNameImportantWords
        .titleCase();
        
    const branchName = `feature/${storyId}-${branchDescriptor}`;
    const ticketName = `feat: ${storyId} ${ticketDescriptor}`;

    console.log(branchName, ticketName);

    return {branchName, ticketName};
}

function showButtons() {
    if (document.querySelector('#copyBranchNameButton')) { return; }
    
    const header = document.querySelector('.menu-bar');
    const names = constructBranchAndTicketName();
    const buttonStyle = `class="menu-item drop-down-save"
        style="margin: 6px; padding: 10px;"`;
    
    const copyBranchNameButton = document.createElement('span');
    copyBranchNameButton.id = 'copyBranchNameButton';
    copyBranchNameButton.innerHTML = `<span ${buttonStyle}>feature/123-task</span>`;
    header.appendChild(copyBranchNameButton);

    copyBranchNameButton.addEventListener('click', () => {
        navigator.clipboard.writeText(names.branchName);       
    });
    
    const copyTicketNameButton = document.createElement('span');
    copyTicketNameButton.innerHTML = `<span ${buttonStyle}>feat: Task</span>`;
    header.appendChild(copyTicketNameButton);

    copyTicketNameButton.addEventListener('click', () => {
        navigator.clipboard.writeText(names.ticketName); 
    });
    
    document.title = names.ticketName;
}

function showButtonsProtected() {
    try {
        showButtons();
    } catch (ex) {
        console.log(ex);
    }
}

setInterval(showButtonsProtected, 1000);
