import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Kem Muhammad</strong>
      <p>Open My Page <a target="_blank" rel="noopener noreferrer" href="https://siddiqtechnologies.com">Siddiq Tech</a></p>
    </div>
  );
};

export default ExploreContainer;
