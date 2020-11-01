  const dir = [{
    id: 1,
    name: "routes",
    parentId: 0,
    isDir: true,
  },
  {
    id: 2,
    parentId: 1,
    isDir: false,
    name: "index.js",
  },
  {
    id: 3,
    parentId: 1,
    name: "links.js",
    isDir: false,
  },
  {
    id: 4,
    parentId: 1,
    name: "component",
    isDir: true,
  },
  
  {
    id: 5,
    parentId: 1,
    isDir: true,
    name: "common",
  },
  {
    id: 6,
    name: "messages",
    isDir: true,
    parentId: 1,
  },
  
  {
    id: 7,
    name: "auth.js",
    parentId: 5,
    isDir: false,
  },
  {
    id: 8,
    name: "posting.js",
    isDir: false,
    parentId: 5,
  },
  {
    id: 9,
    name: "index.js",
    isDir: false,
    parentId: 5,
  },
  
  {
    id: 10,
    name: "index.js",
    isDir: false,
    parentId: 4,
  },
  {
    id: 11,
    name: "sessions.js",
    isDir: false,
    parentId: 4,
  },
  
  {
    id: 12,
    parentId: 6,
    isDir: false,
    name: "messages.js",
  },
  {
    id: 13,
    parentId: 6,
    isDir: false,
    name: "index.js",
  },
  {
    id: 14,
    name: "auth.js",
    parentId: 6,
    isDir: false,
  },
  {
    id: 15,
    name: "sdk_customers",
    parentId: 6,
    isDir: true,
  },
  {
    id: 16,
    name: "fandate.js",
    isDir: false,
    parentId: 15,
  },
  
  {
    id: 17,
    name: "index.js",
    isDir: false,
    parentId: 15,
  },
];

const fragment = document.createDocumentFragment();

/**
 * Traverse the given array of objects representing the directory structure into corresponding DOM list.
 * The recursive function handles 3 cases such as root directory, directory and file.
 * Root Directory is determined based on the values of parentId and isDir properties. parentId is given as 0 for root.
 * @input [Array]
 * @output [DocumentFragment]
 **/
function dirRecursiveTraversal([ele, ...rem]) {
  if (!ele) {
    return fragment;
  }
    
  // directory
  if (ele.isDir) {
      const parentUL = createUL(ele);
      
      // root directory
      if (ele.parentId === 0) {
          const rootEl = createUL(ele, 0);
          
          rootEl.appendChild(createListItem(ele));
          rootEl.addEventListener("click", onDirLinkClick);
          rootEl.classList.add("cursor-pointer");
          
          fragment.appendChild(rootEl);
          fragment.getElementById(ele.id).appendChild(parentUL);
      } else {
          const li = createListItem(ele);
          
          li.appendChild(parentUL);
          li.classList.add("cursor-pointer");
          fragment.getElementById("parent_"+ ele.parentId).appendChild(li); 
      }

      parentUL.classList.toggle('hidden');
  } else {
      const li = createListItem(ele);

      li.style.cursor = "default";
      fragment.getElementById("parent_"+ ele.parentId).appendChild(li);
  }
  
  return dirRecursiveTraversal(rem);
}

function createUL(ele, rootId) {
  const ulEl = document.createElement("ul");
  ulEl.setAttribute('id', rootId === 0 ? `parent_${rootId}` : `parent_${ele.id}`);
  return ulEl;
}

function createListItem(ele) {
  const liEl = document.createElement("li");
  liEl.setAttribute('id', ele.id);
  liEl.textContent = ele.name;
  
  return liEl;
}

function onDirLinkClick(e) {
	const targetId = e.target.id;
  const ul = document.getElementById("parent_"+ targetId);
  
  if (document.getElementById(targetId).contains(ul)) {
		ul.classList.toggle("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  dirRecursiveTraversal(dir);
  document.getElementById("container").appendChild(fragment);
});
