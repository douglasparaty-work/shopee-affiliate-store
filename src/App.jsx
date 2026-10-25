import React, { useState } from 'react';
import { produtos } from './produtos';

function App() {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  const categorias = ['Todos', ...new Set(produtos.map(p => p.categoria))];

  const produtosFiltrados = produtos.filter(p => {
    const matchesBusca = p.nome.toLowerCase().includes(busca.toLowerCase());
    const matchesCategoria = categoria === 'Todos' || p.categoria === categoria;
    return matchesBusca && matchesCategoria;
  });

  return (
    <div className="min-h-screen bg-gray-100 pb-10 font-sans">
      <nav className="bg-orange-600 p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold italic tracking-wider">SHOPEE AFILIADOS</h1>
          </div>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Pesquisar produtos..." 
              className="flex-1 p-2 rounded outline-none text-sm"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 mt-6 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-4 py-1 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                categoria === cat ? 'bg-orange-600 text-white' : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtosFiltrados.map(produto => {
            const hasValidLink = produto.linkAfiliado && produto.linkAfiliado.startsWith('http');
            
            return (
              <div key={produto.id} className="bg-white rounded-sm shadow-sm overflow-hidden flex flex-col border border-transparent hover:border-orange-600 transition-all">
                <div className="aspect-square bg-gray-200 relative">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 flex flex-col flex-1">
                  <h3 className="text-xs md:text-sm text-gray-800 line-clamp-2 h-10 mb-1">
                    {produto.nome}
                  </h3>
                  
                  {produto.avaliacao && (
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-orange-500 text-[10px]">★ {produto.avaliacao}</span>
                      <span className="text-gray-400 text-[10px]">| {produto.vendidos} vendidos</span>
                    </div>
                  )}

                  <div className="mt-auto">
                    {produto.precoOriginal !== null ? (
                      produto.precoPromocional ? (
                        <div>
                          <span className="text-[10px] text-gray-400 line-through">R$ {produto.precoOriginal.toFixed(2)}</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-orange-600 font-bold text-sm md:text-base">
                              R$ {produto.precoPromocional.toFixed(2)}
                            </span>
                            {produto.notaCupom && (
                              <span className="text-[9px] text-orange-500 font-medium">({produto.notaCupom})</span>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="text-orange-600 font-bold text-sm md:text-base">
                          R$ {produto.precoOriginal.toFixed(2)}
                        </div>
                      )
                    ) : (
                      <div className="text-gray-500 text-xs italic">Consulte o preço na Shopee</div>
                    )}
                  </div>
                  
                  {hasValidLink ? (
                    <a 
                      href={produto.linkAfiliado}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 bg-orange-600 text-white text-center py-2 text-xs font-bold rounded-sm hover:brightness-110 transition-all uppercase"
                    >
                      Comprar na Shopee
                    </a>
                  ) : (
                    <button 
                      disabled 
                      className="mt-3 bg-gray-300 text-white text-center py-2 text-xs font-bold rounded-sm uppercase cursor-not-allowed"
                    >
                      Link Indisponível
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {produtosFiltrados.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Nenhum produto encontrado.
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
