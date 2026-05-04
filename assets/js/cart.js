/**
 * Okranchy Cart System — localStorage-based cart management
 */
var OkrCart = (function() {
    var STORAGE_KEY = 'okranchy_cart';

    function getItems() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch(e) {
            return [];
        }
    }

    function saveItems(items) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }

    function generateId() {
        return 'c' + Date.now() + Math.random().toString(36).substr(2, 5);
    }

    return {
        /** Add item or increment quantity if same flavor+size exists */
        addItem: function(item) {
            var items = getItems();
            var existing = null;
            for (var i = 0; i < items.length; i++) {
                if (items[i].flavor === item.flavor && items[i].size === item.size) {
                    existing = items[i];
                    break;
                }
            }
            if (existing) {
                existing.quantity = (existing.quantity || 1) + (item.quantity || 1);
            } else {
                item.id = generateId();
                item.quantity = item.quantity || 1;
                items.push(item);
            }
            saveItems(items);
            return items;
        },

        removeItem: function(id) {
            var items = getItems().filter(function(it) { return it.id !== id; });
            saveItems(items);
            return items;
        },

        updateQuantity: function(id, qty) {
            var items = getItems();
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    items[i].quantity = qty;
                    break;
                }
            }
            saveItems(items);
            return items;
        },

        clearCart: function() {
            localStorage.removeItem(STORAGE_KEY);
            return [];
        },

        getItems: function() {
            return getItems();
        },

        getCount: function() {
            var items = getItems();
            var count = 0;
            for (var i = 0; i < items.length; i++) {
                count += items[i].quantity || 1;
            }
            return count;
        },

        getSubtotal: function() {
            var items = getItems();
            var total = 0;
            for (var i = 0; i < items.length; i++) {
                total += (parseFloat(items[i].price) || 0) * (items[i].quantity || 1);
            }
            return total;
        }
    };
})();
