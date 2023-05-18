#APP

Gympass style APP

#RFs (requisitos funcionais)

- [X] Deve ser possivel se cadastrar;
- [X] Deve ser possivel se autenticar
- [X] Deve ser possivel obter o perfil de usuario logado
- [X] Deve ser possivel obter o número de check-ins realizados pelo usuario logado
- [X] Deve ser possivel o usuario obter seu historico de check-ins;
- [X] Deve ser possivel o usuario buscar academias proximas (até 10 km)
- [X] Deve ser possivel o usuario buscar a academia pelo nome
- [X] Deve ser possivel o usuario realizar check-in em uma academia
- [X] Deve ser possivel o validar o check-in de um usuario
- [X] Deve ser possivel cadastrar uma academia

##RNs (Regras de negocio)

- [X] O Usuario nao deve poder se cadastrar com e-mail duplicado
- [X] O Usuario nao pode fazer 2 check-ins no mesmo dia
- [X] O Usuario nao pode fazer check-in se nao estiver perto (100m) da academia
- [X] o check-in so pode ser validado até 20 minutos apos criado;
- [] o check-in so pode ser validado por administradores
- [] A academia so pode ser cadastrada por administradores


##RFNs (Requisitos nao funcionais)


- [X] A senha do usuario precisa estar criptografada
- [X] Os dados da applicadao precisam estar persitidos em um banco de dados postgresSQL
- [X] Todas listas de dados precisam estar paginadas com 20 itens por pagina
- [] O usuario deve ser identificado por um JWT (JSON WEB TOKEN)



