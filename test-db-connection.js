const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://gubi_admin:CByosvAUQogg@gubi-server-db.c3ooiksq0gbb.us-east-2.rds.amazonaws.com:5432/gubi_db"
    }
  }
})

async function testConnection() {
  try {
    console.log('Testando conexão com PostgreSQL...')
    await prisma.$connect()
    console.log('✅ Conexão estabelecida com sucesso!')
    
    // Teste básico de query
    const result = await prisma.$queryRaw`SELECT version()`
    console.log('📊 Versão do PostgreSQL:', result[0]?.version)
    
  } catch (error) {
    console.error('❌ Erro ao conectar:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
