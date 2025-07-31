'use client';

import { Button } from '@/components/ui';

export default function TestButtonColors() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Teste das Cores dos Botões</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Teste CSS Direto */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Teste CSS Direto</h2>
            <div className="space-y-3">
              <button className="test-gubi-purple">
                CSS Direto Purple
              </button>
              <button className="test-gubi-pink">
                CSS Direto Pink
              </button>
              <button className="test-gubi-error">
                CSS Direto Error
              </button>
            </div>
          </div>

          {/* Teste Direto */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Teste Direto (hardcoded)</h2>
            <div className="space-y-3">
              <button className="bg-[#5A439B] text-white px-4 py-2 rounded-lg">
                Cor Direta #5A439B
              </button>
              <button className="bg-[#E85A9B] text-white px-4 py-2 rounded-lg">
                Cor Direta #E85A9B
              </button>
              <button className="bg-[#FF3B30] text-white px-4 py-2 rounded-lg">
                Cor Direta #FF3B30
              </button>
            </div>
          </div>

          {/* Primary Buttons */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Primary (classes gubi-*)</h2>
            <div className="space-y-3">
              <Button variant="primary" size="sm">Small Primary</Button>
              <Button variant="primary" size="md">Medium Primary</Button>
              <Button variant="primary" size="lg">Large Primary</Button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Secondary</h2>
            <div className="space-y-3">
              <Button variant="secondary" size="sm">Small Secondary</Button>
              <Button variant="secondary" size="md">Medium Secondary</Button>
              <Button variant="secondary" size="lg">Large Secondary</Button>
            </div>
          </div>

          {/* Tertiary Buttons */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Tertiary</h2>
            <div className="space-y-3">
              <Button variant="tertiary" size="sm">Small Tertiary</Button>
              <Button variant="tertiary" size="md">Medium Tertiary</Button>
              <Button variant="tertiary" size="lg">Large Tertiary</Button>
            </div>
          </div>

          {/* Destructive Buttons */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Destructive</h2>
            <div className="space-y-3">
              <Button variant="destructive" size="sm">Small Destructive</Button>
              <Button variant="destructive" size="md">Medium Destructive</Button>
              <Button variant="destructive" size="lg">Large Destructive</Button>
            </div>
          </div>

          {/* Ghost Buttons */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Ghost</h2>
            <div className="space-y-3">
              <Button variant="ghost" size="sm">Small Ghost</Button>
              <Button variant="ghost" size="md">Medium Ghost</Button>
              <Button variant="ghost" size="lg">Large Ghost</Button>
            </div>
          </div>

          {/* Loading State */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Loading States</h2>
            <div className="space-y-3">
              <Button variant="primary" loading>Loading Primary</Button>
              <Button variant="secondary" loading>Loading Secondary</Button>
              <Button variant="tertiary" loading>Loading Tertiary</Button>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Paleta de Cores Gubi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gubi-purple rounded-lg mx-auto mb-2"></div>
              <p className="text-sm">gubi-purple</p>
              <p className="text-xs text-gray-500">#5A439B</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gubi-purple-dark rounded-lg mx-auto mb-2"></div>
              <p className="text-sm">gubi-purple-dark</p>
              <p className="text-xs text-gray-500">#4A3784</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gubi-pink rounded-lg mx-auto mb-2"></div>
              <p className="text-sm">gubi-pink</p>
              <p className="text-xs text-gray-500">#E85A9B</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gubi-light-blue rounded-lg mx-auto mb-2"></div>
              <p className="text-sm">gubi-light-blue</p>
              <p className="text-xs text-gray-500">#00A9E0</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gubi-gray-700 rounded-lg mx-auto mb-2"></div>
              <p className="text-sm">gubi-gray-700</p>
              <p className="text-xs text-gray-500">#3E4C59</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gubi-error rounded-lg mx-auto mb-2"></div>
              <p className="text-sm">gubi-error</p>
              <p className="text-xs text-gray-500">#FF3B30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
