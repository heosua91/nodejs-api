import server from './src/server';
import './src/database';

const PORT = process.env.PORT || 6789;
server.listen(PORT, () => {
  console.log(`BO Backend running on port ${PORT}`);
});