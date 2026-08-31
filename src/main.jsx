import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, ChevronDown, ChevronRight, Clock3, Gift, Heart, Leaf,
  Menu as MenuIcon, Search, ShoppingBag, Sparkles, Truck, UserRound,
  Utensils, X, CirclePlus, Minus, Plus, PackageCheck, CakeSlice, Coffee,
  Salad, Cookie, Soup, MessageCircle
} from 'lucide-react';
import menuData from './data/menu.json';
import './styles.css';

const iconMap = { bowl: Soup, salad: Salad, cookie: Cookie, cake: CakeSlice, cup: Coffee, sparkles: Sparkles, gift: Gift };

function App() {
  const [activeCategory, setActiveCategory] = useState('meals');
  const [cart, setCart] = useState([
    { ...menuData.items[0], qty: 1 },
    { ...menuData.items[2], qty: 1 },
    { ...menuData.items[3], qty: 1 },
  ]);
  const [cartOpen, setCartOpen] = useState(true);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return menuData.items;
    return menuData.items.filter((item) => item.category === activeCategory || (activeCategory === 'meals' && item.category === 'bowls'));
  }, [activeCategory]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const delivery = total >= 499 ? 0 : 40;

  function addToCart(item) {
    setCart((current) => {
      const found = current.find((entry) => entry.id === item.id);
      if (found) return current.map((entry) => entry.id === item.id ? { ...entry, qty: entry.qty + 1 } : entry);
      return [...current, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  }

  function updateQty(id, delta) {
    setCart((current) => current.flatMap((item) => {
      if (item.id !== id) return [item];
      const qty = item.qty + delta;
      return qty > 0 ? [{ ...item, qty }] : [];
    }));
  }

  return (
    <div className="app-shell">
      <div className="announcement">
        <span><Leaf size={14}/> Freshly made. No preservatives. Honest ingredients.</span>
        <span><Truck size={14}/> Free delivery on orders above ₹499</span>
        <span>⌖ Delivering to Bengaluru <ChevronDown size={13}/></span>
      </div>

      <header className="header">
        <a className="brand" href="#top" aria-label="Noura home">
          <div className="brand-mark"><span className="sun"/><span className="leaf l1"/><span className="leaf l2"/><span className="bowl-mark"/></div>
          <div><div className="brand-name">NOURA</div><div className="tagline">NOURISH YOUR EVERYDAY.</div></div>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a className="active" href="#top">HOME</a>
          <a href="#menu">MENU <ChevronDown size={13}/></a>
          <a href="#menu">BESTSELLERS</a>
          <a href="#menu">MEALS <ChevronDown size={13}/></a>
          <a href="#menu">SNACKS <ChevronDown size={13}/></a>
          <a href="#menu">GIFT PACKS</a>
          <a href="#story">OUR STORY</a>
        </nav>
        <div className="header-actions">
          <button aria-label="Search"><Search size={20}/></button>
          <button aria-label="Account"><UserRound size={19}/></button>
          <button aria-label="Cart" className="cart-button" onClick={() => setCartOpen(true)}><ShoppingBag size={20}/><b>{count}</b></button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><Leaf size={15}/> MADE FRESH DAILY</div>
            <h1>Good food.<br/>Better you.<br/><em>Everyday.</em></h1>
            <p>Wholesome meals, nourishing snacks and treats made with real ingredients and lots of care.</p>
            <div className="hero-actions"><button className="btn primary" onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}>ORDER NOW <ArrowRight size={17}/></button><button className="btn secondary" onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}>EXPLORE MENU</button></div>
            <div className="promise-row">
              <span><Leaf/> <b>REAL INGREDIENTS</b><small>Nothing artificial</small></span>
              <span><Soup/> <b>MADE FRESH DAILY</b><small>Small batches</small></span>
              <span><Heart/> <b>MADE WITH CARE</b><small>For you. Always.</small></span>
            </div>
          </div>
          <div className="hero-art">
            <div className="fresh-stamp">MADE<br/>FRESH<br/>DAILY</div>
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1300&q=85" alt="Fresh colourful grain bowl"/>
            <div className="hero-note">Real food.<br/>Real ingredients.<br/><strong>Real difference.</strong><i/></div>
          </div>
        </section>

        <section className="category-strip" id="menu">
          <div className="mind-prompt">WHAT'S<br/>ON YOUR MIND<br/>TODAY? <Leaf size={18}/></div>
          {menuData.categories.map((category) => {
            const Icon = iconMap[category.icon] || Utensils;
            const selected = activeCategory === category.id;
            return <button key={category.id} className={`category ${selected ? 'selected' : ''}`} onClick={() => setActiveCategory(category.id)}><Icon/><span>{category.label}</span></button>;
          })}
          <button className="next-category" aria-label="More categories"><ChevronRight/></button>
        </section>

        <section className="today-section">
          <div className="today-intro">
            <div className="eyebrow">TODAY AT NOURA <Leaf size={14}/></div>
            <h2>Freshly made<br/>this morning.</h2>
            <div className="kitchen-times"><span>08:15 <b>Bakes</b></span><span>09:00 <b>Meals</b></span><span>10:30 <b>Snacks</b></span></div>
            <a href="#story">View kitchen story <ArrowRight size={15}/></a>
          </div>
          <div className="product-grid">
            {filtered.slice(0, 4).map((item) => <ProductCard key={item.id} item={item} onAdd={() => addToCart(item)}/>) }
          </div>
        </section>

        <section className="story-strip" id="story">
          <div className="story-image"><img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80" alt="Fresh ingredients prepared in a kitchen"/></div>
          <div className="story-copy"><span className="eyebrow">THE NOURA WAY</span><h2>Thoughtful<br/>in every bite.</h2><p>Good for you, good for the planet. Small batches, honest ingredients and packaging designed with care.</p><a href="#menu">Discover our story <ArrowRight size={15}/></a></div>
          <div className="values"><Value icon={<PackageCheck/>} title="SUSTAINABLE PACKAGING" text="100% recyclable & plastic-free wherever possible."/><Value icon={<Soup/>} title="HONEST INGREDIENTS" text="We source clean, responsibly & seasonally."/><Value icon={<Heart/>} title="MADE WITH LOVE" text="Every meal is crafted in small batches."/></div>
        </section>
      </main>

      <aside className={`table-panel ${cartOpen ? 'open' : ''}`} aria-label="Your Noura Table">
        <button className="close-table" onClick={() => setCartOpen(false)}><X size={18}/></button>
        <div className="table-title"><h2>YOUR NOURA TABLE</h2><Leaf size={27}/></div>
        <div className="table-meta"><span>{count} ITEMS</span><button>EDIT TABLE <Utensils size={15}/></button></div>
        <div className="cart-items">
          {cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt=""/><div className="cart-item-body"><h3>{item.name}</h3><strong>₹{item.price}</strong><div className="qty"><button onClick={() => updateQty(item.id, -1)}><Minus size={13}/></button><span>{item.qty}</span><button onClick={() => updateQty(item.id, 1)}><Plus size={13}/></button></div></div><button className="remove" onClick={() => updateQty(item.id, -item.qty)} aria-label={`Remove ${item.name}`}>×</button></div>)}
        </div>
        <button className="add-more" onClick={() => { setCartOpen(false); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }); }}><CirclePlus size={28}/><span><b>Add something more?</b><small>Explore sides, drinks & treats.</small></span><ArrowRight size={16}/></button>
        <div className="cart-summary"><div><span>SUBTOTAL</span><b>₹{total}</b></div><div><span>DELIVERY</span><b>{delivery ? `₹${delivery}` : 'FREE'}</b></div>{!delivery && <small>You saved ₹40 on delivery!</small>}<div className="grand"><span>TOTAL</span><b>₹{total + delivery}</b></div><button onClick={() => alert('Checkout flow will be connected to the backend later.')}>PROCEED TO CHECKOUT <ArrowRight size={17}/></button></div>
        <div className="service-badges"><span><Truck/>On time<br/>Delivery</span><span><PackageCheck/>Safe & Secure<br/>Packaging</span><span><Leaf/>Made fresh<br/>every day</span></div>
      </aside>
      {!cartOpen && <button className="floating-cart" onClick={() => setCartOpen(true)}><ShoppingBag/> <b>{count}</b></button>}
      <button className="help"><MessageCircle size={18}/><span>Need help?<small>Chat with us</small></span></button>
    </div>
  );
}

function ProductCard({ item, onAdd }) { return <article className="product-card"><div className="product-image"><img src={item.image} alt={item.name}/><span>{item.tag}</span><button aria-label="Save"><Heart size={17}/></button></div><div className="product-info"><h3>{item.name}</h3><p>{item.description}</p><div><strong>₹{item.price}</strong><button className="add" onClick={onAdd}><Plus size={18}/></button></div></div></article>; }
function Value({ icon, title, text }) { return <div className="value"><span>{icon}</span><div><b>{title}</b><p>{text}</p></div></div>; }

createRoot(document.getElementById('root')).render(<App />);