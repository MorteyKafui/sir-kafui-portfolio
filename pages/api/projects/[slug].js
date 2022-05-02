const { projects } = require('./data.json');

export default function handler(req, res) {
  const prt = projects.filter(el => el.slug === req.query.slug);

  if (req.method === 'GET') {
    res.status(200).json(prt);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method is allowed!` });
  }
}
