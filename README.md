# Convert the given array of Objects which represent the directory hierarchy into corresponding nested DOM list.

Example Input:
```javascript
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
```
Root Directory has parentId as 0 and each directory has isDir flag enabled. 

Output should be like below.

![Screenshot 2020-11-02 at 2 28 13 AM](https://user-images.githubusercontent.com/12800370/97815355-55415200-1cb3-11eb-8554-bfaddb298ff0.png)
