import React from "react";

export default function App() {
  const brand = {
    name: 'FERRETERIA LA ARGENTINA S.A.',
    color: '#014239',
    whatsappPrimary: '(3489) 531288',
    whatsappSecondary: '(1123) 898217',
    email: 'ferreteria.la.argentina@gmail.com',
    address: 'Av. 6 de Julio 1422 - Campana, Buenos Aires',
    hours: 'Lunes a viernes de 08:00 a 18:00 hs · Sábados de 08:00 a 13:00 hs',
    logo: '/assets/logo.png',
  };

  const generateOrderId = () => {
    const date = new Date();
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `FA-${y}${m}${d}-${random}`;
  };

  const categories = [
    'Herramientas eléctricas',
    'Herramientas manuales',
    'Soldadura',
    'Abrasivos',
    'Lubricantes',
    'Bulonería',
    'Seguridad',
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Amoladora Bosch GWS 28-180',
      price: '$529.648',
      installment: '$567.480 en 3 y 6 cuotas sin interés',
      image: '/assets/gws-28-180.png',
      badge: 'Oferta',
      category: 'Herramientas eléctricas',
    },
    {
      id: 2,
      name: 'Amoladora Bosch GWS 850',
      price: '$175.150',
      installment: '$187.660 en 3 y 6 cuotas sin interés',
      image: '/assets/gws-850.png',
      badge: 'Oferta',
      category: 'Herramientas eléctricas',
    },
    {
      id: 3,
      name: 'Amoladora Bosch GWS 770',
      price: '$90.280',
      installment: '$96.730 en 3 y 6 cuotas sin interés',
      image: '/assets/gws-770.png',
      badge: 'Oferta',
      category: 'Herramientas eléctricas',
    },
    {
      id: 4,
      name: 'Amoladora Bosch GWS 9-125P',
      price: '$231.910',
      installment: '$248.475 en 3 y 6 cuotas sin interés',
      image: '/assets/gws-9-125p.png',
      badge: 'Oferta',
      category: 'Herramientas eléctricas',
    },
    {
      id: 5,
      name: 'Soldadora Inverter LA-SER 160 AMP',
      price: '$240.400',
      installment: '$257.575 en 3 y 6 cuotas sin interés',
      image: '/assets/laser-160.png',
      badge: 'Oferta',
      category: 'Soldadura',
    },
    {
      id: 6,
      name: 'Soldadora Inverter LA-SER 120 AMP',
      price: '$193.299',
      installment: '$207.105 en 3 y 6 cuotas sin interés',
      image: '/assets/laser-120.png',
      badge: 'Oferta',
      category: 'Soldadura',
    },
    {
      id: 7,
      name: 'Electrodos Gladiator Pro 6013 3.25mm 5kg',
      price: '$22.950',
      installment: 'Efectivo',
      image: '/assets/electrodos.png',
      badge: 'Oferta',
      category: 'Soldadura',
    },
    {
      id: 8,
      name: 'Disco de corte Nebraska 115x1.6',
      price: '$790',
      installment: '$712 pack x10',
      image: '/assets/disco-nebraska.png',
      badge: 'Oferta',
      category: 'Abrasivos',
    },
    {
      id: 9,
      name: 'WD-40 311gr',
      price: '$10.210',
      installment: 'Efectivo',
      image: '/assets/wd40.png',
      badge: 'Oferta del mes',
      category: 'Lubricantes',
    }
  ];

  const benefits = [
    'Compra online simple y rápida',
    'Atención personalizada por WhatsApp',
    'Retiro en sucursal',
    'Envíos a todo el país por Correo Argentino',
  ];

  const paymentMethods = [
    'Efectivo',
    'Mercado Pago (opcional)',
    'Transferencia bancaria',
    '3 y 6 cuotas sin interés Plan MiPyme',
  ];

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const orderId = generateOrderId();
    const shippingLine = data.direccion ? `\nDirección: ${data.direccion}` : '';
    const customerMail = [
      `Hola ${data.nombre},`,
      '',
      `Tu pedido ${orderId} fue recibido correctamente.`,
      '',
      `Producto: ${data.producto}`,
      `Monto total: ${data.total}`,
      `Medio de pago: ${data.pago}`,
      `Entrega: ${data.entrega}`,
      shippingLine ? shippingLine.trim() : '',
      '',
      'En breve te contactaremos para coordinar el pago y la entrega.',
      '',
      'FERRETERIA LA ARGENTINA S.A.'
    ].filter(Boolean).join('\n');

    const adminMessage = [
      `Pedido ${orderId}`,
      `Cliente: ${data.nombre}`,
      `Tel: ${data.telefono}`,
      `Email: ${data.email}`,
      `Producto: ${data.producto}`,
      `Total: ${data.total}`,
      `Pago: ${data.pago}`,
      `Entrega: ${data.entrega}`,
      data.direccion ? `Dirección: ${data.direccion}` : null,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/543489531288?text=${encodeURIComponent(adminMessage)}`, '_blank');
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(`Nuevo Pedido ${orderId}`)}&body=${encodeURIComponent(adminMessage + '\n\nEnviar confirmación al cliente: ' + data.email)}`;
    setTimeout(() => {
      window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(`Confirmación de compra ${orderId}`)}&body=${encodeURIComponent(customerMail)}`;
    }, 400);

    alert(`Compra confirmada. Número de pedido: ${orderId}`);
    e.currentTarget.reset();
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#fff', color: '#18181b' }}>
      <header style={{ borderBottom: '1px solid #e4e4e7', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={brand.logo} alt={brand.name} style={{ height: 50, width: 'auto', objectFit: 'contain' }} />
            <div>
              <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, color: '#71717a', margin: 0 }}>Ferretería industrial</p>
              <h1 style={{ fontSize: 20, margin: '4px 0 0', fontWeight: 700 }}>{brand.name}</h1>
            </div>
          </div>
          <nav style={{ display: 'flex', gap: 18, fontSize: 14, color: '#3f3f46', flexWrap: 'wrap' }}>
            <a href="#inicio">Inicio</a>
            <a href="#categorias">Categorías</a>
            <a href="#productos">Productos</a>
            <a href="#envios">Envíos</a>
            <a href="#checkout-info">Comprar</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button style={{ background: brand.color, color: '#fff', border: 'none', borderRadius: 16, padding: '10px 16px', fontWeight: 700 }}>Carrito (0) 🛒</button>
        </div>
      </header>

      <main>
        <section id="inicio" style={{ background: 'linear-gradient(135deg, #f4f4f5, #ffffff, #e4e4e7)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '70px 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-block', border: '1px solid #d4d4d8', background: '#fff', padding: '10px 14px', borderRadius: 999, fontSize: 14, fontWeight: 600, color: '#3f3f46' }}>
                  E-commerce completo para hogar, taller e industria
                </div>
                <h2 style={{ fontSize: 'clamp(34px,5vw,62px)', lineHeight: 1.05, margin: '24px 0 0', fontWeight: 800 }}>
                  Tu ferretería online con imagen <span style={{ color: brand.color }}>seria</span>, industrial y lista para vender.
                </h2>
                <p style={{ fontSize: 18, color: '#52525b', maxWidth: 760, lineHeight: 1.6, marginTop: 18 }}>
                  Catálogo, carrito, medios de pago flexibles, ofertas, categorías, atención por WhatsApp y una estética sobria alineada con la identidad visual de Ferretería La Argentina.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
                  <a href="#productos" style={{ background: brand.color, color: '#fff', textDecoration: 'none', borderRadius: 16, padding: '14px 22px', fontWeight: 700 }}>Ver productos</a>
                  <a href="https://wa.me/543489531288" target="_blank" rel="noreferrer" style={{ border: '1px solid #d4d4d8', background: '#fff', color: '#18181b', textDecoration: 'none', borderRadius: 16, padding: '14px 22px', fontWeight: 700 }}>Hablar por WhatsApp</a>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 20 }}>
                  <span style={{ border: '1px solid #e4e4e7', borderRadius: 999, padding: '10px 14px', background: '#fff' }}>Compra online + atención personalizada</span>
                  <span style={{ border: '1px solid #e4e4e7', borderRadius: 999, padding: '10px 14px', background: '#fff' }}>Retiro en local</span>
                  <span style={{ border: '1px solid #e4e4e7', borderRadius: 999, padding: '10px 14px', background: '#fff' }}>Envíos por Correo Argentino</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, marginTop: 28 }}>
                  {benefits.map((item) => (
                    <div key={item} style={{ border: '1px solid #e4e4e7', background: 'rgba(255,255,255,0.9)', padding: 16, borderRadius: 18, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>{item}</div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid #e4e4e7', borderRadius: 28, boxShadow: '0 14px 30px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                <div style={{ borderBottom: '1px solid #e4e4e7', padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <div>
                    <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: '#71717a', margin: 0 }}>Panel destacado</p>
                    <h3 style={{ fontSize: 22, margin: '4px 0 0' }}>Ofertas y productos en tendencia</h3>
                  </div>
                  <div style={{ borderRadius: 999, background: '#f4f4f5', padding: '6px 12px', fontSize: 12, fontWeight: 600, color: '#3f3f46' }}>Web demo</div>
                </div>
                <div style={{ padding: 16, display: 'grid', gap: 14 }}>
                  {featuredProducts.slice(0, 2).map((product) => (
                    <div key={product.id} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 14, border: '1px solid #e4e4e7', borderRadius: 24, padding: 12 }}>
                      <img src={product.image} alt={product.name} style={{ width: '100%', height: 110, objectFit: 'cover', borderRadius: 18 }} />
                      <div>
                        <div style={{ display: 'inline-block', background: '#f4f4f5', padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>{product.badge}</div>
                        <h4 style={{ margin: '10px 0 0', fontSize: 16 }}>{product.name}</h4>
                        <p style={{ margin: '10px 0 0', fontSize: 30, fontWeight: 800, color: brand.color }}>{product.price}</p>
                        <p style={{ margin: '2px 0 0', color: '#71717a' }}>{product.installment}</p>
                        <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <button style={{ padding: '10px 12px', borderRadius: 12, border: '1px solid #d4d4d8', background: '#fff', fontWeight: 600 }}>Ver detalle</button>
                          <button style={{ padding: '10px 12px', borderRadius: 12, border: 'none', background: brand.color, color: '#fff', fontWeight: 700 }}>Comprar</button>
                          <a href={`https://wa.me/543489531288?text=${encodeURIComponent(`Hola, quiero consultar por ${product.name}`)}`} target="_blank" rel="noreferrer" style={{ padding: '10px 12px', borderRadius: 12, border: '1px solid #15803d', color: '#166534', textDecoration: 'none', fontWeight: 700 }}>WhatsApp</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categorias" style={{ padding: '64px 0', background: '#fafafa', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: 16, marginBottom: 28 }}>
              <div>
                <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, color: '#71717a', margin: 0 }}>Categorías principales</p>
                <h3 style={{ fontSize: 38, margin: '8px 0 0' }}>Comprá por sector</h3>
              </div>
              <p style={{ color: '#52525b', maxWidth: 700, lineHeight: 1.6 }}>
                Una arquitectura pensada para que el cliente encuentre rápido lo que necesita, tanto si busca herramientas para el hogar como productos para uso industrial.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
              {categories.map((category) => (
                <div key={category} style={{ borderRadius: 24, background: '#fff', border: '1px solid #e4e4e7', padding: 24, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 16, marginBottom: 16, background: brand.color }} />
                  <h4 style={{ fontSize: 22, margin: 0 }}>{category}</h4>
                  <p style={{ fontSize: 14, color: '#71717a', marginTop: 8 }}>Explorar productos</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="productos" style={{ padding: '64px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 28 }}>
              <div>
                <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, color: '#71717a', margin: 0 }}>Catálogo destacado</p>
                <h3 style={{ fontSize: 38, margin: '8px 0 0' }}>Productos listos para vender</h3>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <input placeholder="Buscar herramientas, marcas o categorías" style={{ width: 300, borderRadius: 16, border: '1px solid #d4d4d8', padding: '14px 16px' }} />
                <select style={{ borderRadius: 16, border: '1px solid #d4d4d8', padding: '14px 16px', background: '#fff' }}>
                  <option>Todas las categorías</option>
                  {categories.map((category) => <option key={category}>{category}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 22 }}>
              {featuredProducts.map((product) => (
                <article key={product.id} style={{ borderRadius: 28, border: '1px solid #e4e4e7', background: '#fff', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={product.image} alt={product.name} style={{ height: 260, width: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: 12, left: 12, borderRadius: 999, background: 'rgba(255,255,255,0.95)', padding: '6px 12px', fontSize: 12, fontWeight: 700 }}>
                      {product.badge}
                    </span>
                  </div>
                  <div style={{ padding: 20 }}>
                    <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: '#71717a', margin: 0 }}>{product.category}</p>
                    <h4 style={{ margin: '10px 0 0', fontSize: 22, minHeight: 62 }}>{product.name}</h4>
                    <p style={{ margin: '16px 0 0', fontSize: 32, fontWeight: 800, color: brand.color }}>{product.price}</p>
                    <p style={{ margin: '4px 0 0', color: '#71717a', minHeight: 40 }}>{product.installment}</p>
                    <div style={{ marginTop: 18, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <button style={{ flex: 1, borderRadius: 16, border: '1px solid #d4d4d8', padding: '12px 14px', background: '#fff', fontWeight: 600 }}>Ver más</button>
                      <a href="#checkout-info" style={{ flex: 1, borderRadius: 16, padding: '12px 14px', background: brand.color, color: '#fff', textDecoration: 'none', textAlign: 'center', fontWeight: 700 }}>Comprar</a>
                      <a href={`https://wa.me/543489531288?text=${encodeURIComponent(`Hola, quiero consultar por ${product.name}`)}`} target="_blank" rel="noreferrer" style={{ flex: 1, borderRadius: 16, border: '1px solid #15803d', padding: '12px 14px', color: '#166534', textDecoration: 'none', textAlign: 'center', fontWeight: 700 }}>WhatsApp</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="envios" style={{ padding: '64px 0', background: '#f4f4f5' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: 16, marginBottom: 24 }}>
              <div>
                <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, color: '#71717a', margin: 0 }}>Logística</p>
                <h3 style={{ fontSize: 38, margin: '8px 0 0' }}>Envíos y retiro</h3>
              </div>
              <p style={{ color: '#52525b', maxWidth: 700, lineHeight: 1.6 }}>
                La tienda queda preparada para vender tanto a clientes que retiran en el local como a quienes compran desde cualquier punto del país.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
              <div style={{ padding: 24, background: '#fff', borderRadius: 24, border: '1px solid #e4e4e7', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontSize: 22, margin: 0 }}>Retiro en sucursal</h4>
                <p style={{ marginTop: 10, color: '#52525b', lineHeight: 1.6 }}>Podés retirar sin costo por Av. 6 de Julio 1422, Campana, Buenos Aires.</p>
              </div>
              <div style={{ padding: 24, background: '#fff', borderRadius: 24, border: '1px solid #e4e4e7', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontSize: 22, margin: 0 }}>Envíos a todo el país</h4>
                <p style={{ marginTop: 10, color: '#52525b', lineHeight: 1.6 }}>Despachos mediante Correo Argentino con cobertura nacional.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="ofertas" style={{ padding: '64px 0', background: '#09090b', color: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, color: '#a1a1aa', margin: 0 }}>Ofertas y financiación</p>
              <h3 style={{ fontSize: 42, margin: '8px 0 0', lineHeight: 1.1 }}>Una sección comercial pensada para convertir.</h3>
              <p style={{ marginTop: 14, color: '#d4d4d8', fontSize: 18, lineHeight: 1.6 }}>
                La web destaca promociones especiales, cuotas, beneficios por pago y lanzamientos para que tus campañas de Instagram y WhatsApp lleven tráfico directo a la tienda.
              </p>
            </div>
            <div style={{ borderRadius: 28, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', padding: 24 }}>
              <h4 style={{ fontSize: 26, margin: 0 }}>Métodos de pago</h4>
              <div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
                {paymentMethods.map((method) => (
                  <div key={method} style={{ borderRadius: 18, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', padding: '14px 16px' }}>{method}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="checkout-info" style={{ padding: '64px 0', background: '#fafafa', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
          <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 20px' }}>
            <h3 style={{ fontSize: 38, margin: 0 }}>Finalizar compra</h3>
            <p style={{ color: '#52525b', lineHeight: 1.6, marginTop: 10 }}>
              Completá el pedido y el sistema dejará preparado el aviso por WhatsApp y por email con número de pedido, detalle, monto y medio de pago. Después se pueden sumar tus alias definitivos y un envío automático real de correos.
            </p>
            <form onSubmit={handleCheckout} style={{ display: 'grid', gap: 14, marginTop: 24 }}>
              <input name="nombre" required placeholder="Nombre y apellido" style={fieldStyle} />
              <input name="telefono" required placeholder="Teléfono" style={fieldStyle} />
              <input name="email" required type="email" placeholder="Email" style={fieldStyle} />
              <input name="producto" required placeholder="Producto" style={fieldStyle} />
              <input name="total" required placeholder="Monto total" style={fieldStyle} />
              <select name="pago" style={fieldStyle}>
                <option>Transferencia</option>
                <option>Mercado Pago</option>
                <option>Efectivo</option>
              </select>
              <select name="entrega" style={fieldStyle}>
                <option>Retiro en local</option>
                <option>Envío a domicilio</option>
              </select>
              <input name="direccion" placeholder="Dirección (si elige envío)" style={fieldStyle} />
              <button type="submit" style={{ background: brand.color, color: '#fff', border: 'none', padding: '14px 18px', borderRadius: 16, fontWeight: 800, fontSize: 16 }}>Confirmar compra</button>
            </form>
          </div>
        </section>

        <section id="nosotros" style={{ padding: '64px 0', background: '#fafafa', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 30 }}>
            <div>
              <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, color: '#71717a', margin: 0 }}>Quiénes somos</p>
              <h3 style={{ fontSize: 38, margin: '8px 0 0' }}>Una identidad profesional, confiable y orientada a resultados.</h3>
              <p style={{ marginTop: 14, color: '#52525b', lineHeight: 1.7, fontSize: 18 }}>
                El objetivo del sitio es que Ferretería La Argentina pueda vender online con una estética sobria, industrial y moderna, reforzando confianza en clientes de mostrador, empresas y consumidores particulares.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
              {[
                'Diseño serio y alineado con tu marca',
                'Sección de productos destacados y ofertas',
                'Integración con WhatsApp para consultas rápidas',
                'Base lista para sumar Mercado Pago y envíos',
              ].map((point) => (
                <div key={point} style={{ borderRadius: 24, background: '#fff', border: '1px solid #e4e4e7', padding: 20, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 16, marginBottom: 16, background: brand.color }} />
                  <p style={{ margin: 0, fontWeight: 600, lineHeight: 1.6 }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" style={{ padding: '64px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
            <div style={{ borderRadius: 32, border: '1px solid #e4e4e7', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
              <div style={{ padding: 34 }}>
                <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 3, color: '#71717a', margin: 0 }}>Contacto</p>
                <h3 style={{ fontSize: 38, margin: '8px 0 0' }}>Información comercial</h3>
                <div style={{ marginTop: 28, display: 'grid', gap: 20, color: '#3f3f46' }}>
                  <div><p style={labelStyle}>Dirección</p><p style={valueStyle}>{brand.address}</p></div>
                  <div><p style={labelStyle}>WhatsApp / Teléfonos</p><p style={valueStyle}>{brand.whatsappPrimary}</p><p style={valueStyle}>{brand.whatsappSecondary}</p></div>
                  <div><p style={labelStyle}>Email</p><p style={valueStyle}>{brand.email}</p></div>
                  <div><p style={labelStyle}>Horarios</p><p style={valueStyle}>{brand.hours}</p></div>
                </div>
              </div>
              <div style={{ padding: 34, color: '#fff', background: brand.color }}>
                <h4 style={{ fontSize: 30, margin: 0 }}>Solicitá asesoramiento o presupuesto</h4>
                <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                  En la versión final se puede sumar formulario conectado, mapa, chat directo, seguimiento de pedidos y conexión con medios de pago y envíos reales.
                </p>
                <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
                  <input placeholder="Nombre y apellido" style={darkFieldStyle} />
                  <input placeholder="Teléfono o email" style={darkFieldStyle} />
                  <textarea placeholder="Contanos qué producto o rubro necesitás" style={{ ...darkFieldStyle, minHeight: 120, resize: 'vertical' }} />
                  <button style={{ borderRadius: 16, background: '#fff', color: '#18181b', border: 'none', padding: '14px 18px', fontWeight: 800, marginTop: 4 }}>Enviar consulta</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href="https://wa.me/543489531288" target="_blank" rel="noreferrer" style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 60, background: brand.color, color: '#fff', textDecoration: 'none', padding: '14px 18px', borderRadius: 999, fontWeight: 800, boxShadow: '0 18px 40px rgba(0,0,0,0.22)' }}>WhatsApp</a>

      <footer style={{ borderTop: '1px solid #27272a', background: '#09090b', color: '#d4d4d8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 28 }}>
          <div>
            <h4 style={{ color: '#fff', fontSize: 22, margin: 0 }}>{brand.name}</h4>
            <p style={{ marginTop: 12, maxWidth: 620, lineHeight: 1.7, color: '#a1a1aa' }}>
              Demo inicial de una tienda online de ferretería con enfoque serio, industrial y comercial. Lista para evolucionar a un e-commerce completo con productos reales, pagos y gestión de pedidos.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 20, fontSize: 14 }}>
            <div>
              <p style={{ color: '#fff', fontWeight: 700, margin: 0 }}>Sucursal</p>
              <p style={{ marginTop: 10 }}>{brand.address}</p>
            </div>
            <div>
              <p style={{ color: '#fff', fontWeight: 700, margin: 0 }}>Atención</p>
              <p style={{ marginTop: 10 }}>{brand.hours}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const fieldStyle = {
  border: '1px solid #d4d4d8',
  padding: '14px 16px',
  borderRadius: 16,
  fontSize: 16,
  background: '#fff',
};

const darkFieldStyle = {
  border: '1px solid rgba(255,255,255,0.2)',
  padding: '14px 16px',
  borderRadius: 16,
  fontSize: 16,
  background: 'rgba(255,255,255,0.08)',
  color: '#fff',
};

const labelStyle = {
  fontSize: 14,
  color: '#71717a',
  margin: 0,
};

const valueStyle = {
  fontWeight: 600,
  margin: '4px 0 0',
  wordBreak: 'break-word',
};
