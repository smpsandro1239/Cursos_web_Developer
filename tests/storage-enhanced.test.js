/**
 * Enhanced Storage Tests
 */

describe('Enhanced Storage', () => {
    let storage;
    
    beforeEach(() => {
        storage = new EnhancedStorage();
    });
    
    test('deve inicializar IndexedDB com sucesso', async () => {
        await expect(storage.init()).resolves.not.toThrow();
    });
    
    test('deve salvar e recuperar progresso do usuário', async () => {
        await storage.init();
        const testData = { userId: 'test', progress: { completed: ['module-1'] } };
        
        await storage.saveProgress('test', testData);
        const retrieved = await storage.getProgress('test');
        
        expect(retrieved).toEqual(testData);
    });
});