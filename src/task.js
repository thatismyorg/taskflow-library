// Task management module
class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();
    }

    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
    }
}

module.exports = Task;

// В конструктор после this.createdAt
this.priority = 'medium';

// Новый метод
setPriority(priority) {
    const validPriorities = ['low', 'medium', 'high', 'urgent'];
    if (validPriorities.includes(priority)) {
        this.priority = priority;
        return true;
    }
    return false;
}

// Добавить в module.exports
//
// adding a maximum limit for labels (e.g., 5 per task)
