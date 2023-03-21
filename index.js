class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    class Node {
        constructor(value) {
            this.value = value || null;
            this.next = null;
        }
    }

    append(value) {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);
    }


    prepend(value) {
        let prevFirstNode = this.head.next;
        let newFirstNode = new Node;
        this.head.next = newFirstNode;
        newFirstNode.next = prevFirstNode;
    }

    size() {
        let currentNode = this.head;
        const count = 1;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            count ++;
        }
        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    at(index) {
        let currentNode = this.head;
        const count = 0; 
        while (count < index) {
            currentNode = currentNode.next;
            count ++;
        }
        return currentNode;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode.value !== value) {
            if (currentNode.next === null) {
                return false;
            }
            currentNode = currentNode.next;
        }
        return true;
    }

    find(value) {
        let currentNode = this.head;
        const count = 0;
        while (currentNode.value !== value) {
            if(currentNode.next === null) {
                return (`List does not contain ${value}`);
            }
            currentNode = currentNode.next;
            count ++;
        }
        return count;
    }

    listToString() {
        let currentNode = this.head;
        const list = '';
        while (currentNode.next) {
            list += `(${currentNode}) ->`
            currentNode = currentNode.next;
        }
        list += `(${currentNode} -> null)`;
        return list;
    }

}

