const state = {
    balance: parseFloat(localStorage.getItem('userBalance')) || 0,
    listeners: [],
    
    init() {
        this.notify();
    },

    addBalance(amount) {
        this.balance = Math.min(this.balance + amount, 1835.00);
        this.save();
        this.notify();
    },

    setBalance(amount) {
        this.balance = Math.min(amount, 1835.00);
        if (this.balance === 0) {
            sessionStorage.removeItem('funnelStep');
            sessionStorage.removeItem('funnelQuestionIndex');
        }
        this.save();
        this.notify();
    },

    save() {
        localStorage.setItem('userBalance', this.balance.toFixed(2));
    },

    subscribe(callback) {
        this.listeners.push(callback);
        callback(this.balance);
    },

    notify() {
        this.listeners.forEach(callback => callback(this.balance));
    },
    
    formatMoney(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    state.init();
});

window.appState = state;
