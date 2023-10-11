Tela Inicial:

Página inicial com opções de navegação.
Botões para acessar conjuntos de flashcards existentes ou criar um novo conjunto.
Possibilidade de acesso à tela de configurações.
Tela de Lista de Conjuntos de Flashcards:

Exibição de todos os conjuntos de flashcards disponíveis.
Opção de pesquisa para encontrar conjuntos específicos.
Botões para criar um novo conjunto de flashcards.
Tela de Criação/Edição de Conjunto de Flashcards:

Formulário para criar um novo conjunto de flashcards.
Campos para adicionar o nome do conjunto e uma descrição.
Botão para adicionar ou editar os flashcards dentro do conjunto.
Tela de Flashcards:

Apresentação de um flashcard por vez.
Exibição da palavra em inglês ou frase no lado frontal do cartão.
Botão para revelar a tradução ou definição no lado de trás do cartão.
Botões de navegação para avançar ou retroceder entre os flashcards.
Opção de marcar um flashcard como "aprendido" ou "revisar mais tarde".
Tela de Revisão:

Apresentação de flashcards marcados para revisão.
Possibilidade de escolher o nível de dificuldade para cada flashcard.
Botões para marcar um flashcard como "aprendido" ou "revisar mais tarde".
Estatísticas de progresso de aprendizado.
Tela de Configurações:

Opções para personalizar a experiência do usuário.
Escolha do idioma de exibição.
Configuração de notificações de revisão.
Opção de importar/exportar conjuntos de flashcards.
Tela de Resultados de Aprendizado:

Resumo dos progressos do usuário.
Estatísticas de quantos flashcards foram aprendidos, revisados ou estão pendentes.
Gráficos de progresso ao longo do tempo.
Tela de Detalhes do Flashcard:

Visualização detalhada de um flashcard.
Opção para editar ou excluir o flashcard.
Possibilidade de adicionar notas adicionais.
Tela de Ajuda e Tutorial:

Guia do usuário sobre como usar o aplicativo.
Instruções sobre como criar e estudar com flashcards.
Tela de Login/Registro (opcional):

Caso deseje criar contas de usuário para salvar progresso e conjuntos de flashcards personalizados.
Lembre-se de que o design e a usabilidade são fundamentais para um aplicativo de flashcards eficaz. Certifique-se de criar um layout intuitivo e atraente para os usuários. Além disso, a capacidade de importar/exportar conjuntos de flashcards é uma característica útil para permitir que os usuários compartilhem e usem conjuntos de flashcards personalizados.

À medida que desenvolve seu aplicativo de flashcards, considere as necessidades e os comentários de seus usuários para melhorar a experiência de aprendizado e tornar seu aplicativo mais eficaz.



npm install -g react-native - instalar na pasta do projeto
npx react-native init App --template react-native-template-typescript

npm install styled-components

npm install react-native-vector-icons @expo/vector-icons
npm install @react-native-async-storage/async-storage
npm install --save-dev @types/jest
npm install react-native-safe-area-context





import { Button } from 'react-native';
import Tts from 'react-native-tts';

export function Home() {
  useEffect(() => {
    // Configurar as configurações de fala
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultRate(0.4); // Velocidade da fala (0.5 é metade da velocidade padrão)
  }, []);


  const falarPalavra = () => {
    Tts.speak('cold  ');
  };
  const falarPalavra2 = () => {
    Tts.speak('warm    ');
  };
  
  return (
    <Container>
      <Text>
        oi
      </Text>
      <Button title="Falar Palavra" onPress={falarPalavra} />
      <Text>
        oi
      </Text>
      <Button title="Falar Palavra" onPress={falarPalavra2} />
    </Container>
  )
}