import { AfterViewInit, Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'tree-representation',
  imports: [],
  templateUrl: './tree-representation.html',
  styleUrl: './tree-representation.scss',
})
export class TreeRepresentation implements AfterViewInit{

  constructor() {
    const firstKey = Object.keys(this.tree)[0];
    this.consoleTreeStructure(firstKey);
  }

  ngAfterViewInit() {
    this.renderTreeToElementRef("a", "tree-representation");
  }

  tree: Record<string, string[]> = {
    a: ["b", "c", "m", "n"],
    b: ["d", "e"],
    c: ["f", "g"],
    e: ["h"],
    f: ["j", "k", "l"],
    k: ["o", "p"]
  };

  // at first I came up with preorder traversal using reccursion to print the tree structure
  // but there is a limitation: it fails if a node has more than two children
  // so I used for loop to handle multiple children. (this is just for console logging purpose)
  consoleTreeStructure(node: string, depth = 0) {
    console.log(' '.repeat(depth * 4) + '- ' + node);
    if (this.tree.hasOwnProperty(node)) {
      for (const child of this.tree[node]) {
        this.consoleTreeStructure(child, depth + 1);
      }
    }
  }

  // function to build HTML structure of the tree
  // using unordered list <ul> and list items <li> to represent nodes and their children

  //At first i thought of appending elements to a string and rendering it in html using innerHTML
  // but it is not a good practice to use innerHTML due to security reasons (XSS attacks)
  // So I used DOM manipulation to create elements and append them to the container
  buildTree(node: string): string {
    let html = `<li class="dashed">${node}`;

    if (this.tree.hasOwnProperty(node)) {
      html += `<ul class="list-style-type-none">`;
      for (const child of this.tree[node]) {
        html += this.buildTree(child);
      }
      html += `</ul>`;
    }

    html += `</li>`;
    return html;
  }

  // Function to render the tree in the specified container
  renderTreeToElementRef(rootNode: string, containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const html = `<ul class="list-style-type-none">${this.buildTree(rootNode)}</ul>`;
    container.innerHTML = html; // ✅ insert HTML into DOM
  }
}
