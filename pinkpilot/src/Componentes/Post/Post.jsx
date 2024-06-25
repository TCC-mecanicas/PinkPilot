import seta from '../../../public/setaa.svg';

import avatar1 from '../../../public/avatar1.jpg';
import avatar2 from '../../../public/avatar2.jpg';

const data = [
    {
        name: 'Ana Schwarzschild',
        profilePic: avatar1,
        thumbnail: 'tumb.svg',
        comments: [
            { name: 'Lavinia la Monique', text: 'Tive um problema parecido com o meu carro e consegui resolver.', avatar: 'https://via.placeholder.com/40' },
            { name: 'Aanya Singh', text: 'Que vídeo excelente! Com dicas muito úteis! Com certeza vou tentar algumas dessas.', avatar: 'https://via.placeholder.com/40' },
            { name: 'Helena Schneider', text: 'Sempre fico feliz em compartilhar meu conhecimento com outros entusiastas de carros.', avatar: 'https://via.placeholder.com/40' },
            { name: 'Rosa Fonseca Alves', text: 'Estou sempre procurando maneiras de economizar dinheiro em reparos de carros.', avatar: 'https://via.placeholder.com/40' },
        ]
    },
    {
        name: 'Carmem Aparecida',
        profilePic: avatar2,
        thumbnail: 'tumb.svg',
        comments: [
            { name: 'Lavinia la Monique', text: 'Tive um problema parecido com o meu carro e consegui resolver.', avatar: 'https://via.placeholder.com/40' },
            { name: 'Aanya Singh', text: 'Que vídeo excelente! Com dicas muito úteis! Com certeza vou tentar algumas dessas.', avatar: 'https://via.placeholder.com/40' },
            { name: 'Helena Schneider', text: 'Sempre fico feliz em compartilhar meu conhecimento com outros entusiastas de carros.', avatar: 'https://via.placeholder.com/40' },
            { name: 'Rosa Fonseca Alves', text: 'Estou sempre procurando maneiras de economizar dinheiro em reparos de carros.', avatar: 'https://via.placeholder.com/40' },
        ]
    }
];

function Post() {
    return (
        <div className="p-4 rounded-lg m-10 max-w-5xl mx-auto">
            {data.map((post, index) => (
                <div key={index} className="mb-6 bg-post rounded-lg p-6"> {/* Adicionado mb-8 e estilos para o card */}
                    <div className="flex items-center mb-5">
                        <img
                            className="w-12 h-12 rounded-full mr-4"
                            src={post.profilePic}
                            alt={post.name}
                        />
                        <div>
                            <h1 className="font-bold">{post.name}</h1>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-3/5 relative">
                            <img
                                className="rounded-lg w-full"
                                src={post.thumbnail}
                                alt="Video Thumbnail"
                            />
                            <button className="absolute inset-0 flex items-center justify-center text-5xl text-magentinha">
                                <i className="fa fa-play-circle"></i>
                            </button>
                        </div>
                        <div className="w-2/5 flex flex-col pl-4">
                            {post.comments.map((comment, idx) => (
                                <div key={idx} className="flex items-start mb-4">
                                    <img
                                        className="w-10 h-10 rounded-full mr-4"
                                        src={comment.avatar}
                                        alt={comment.name}
                                    />
                                    <div>
                                        <h1 className="font-bold">{comment.name}</h1>
                                        <p>{comment.text}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center mt-auto">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="w-full py-2 px-4 placeholder-magentinha rounded-full border border-magentinha focus:outline-none focus:border-magentinha pr-12"
                                        placeholder="Adicione um comentário ..."
                                    />
                                    <button className="absolute inset-y-0 pr-3 right-0 flex items-center justify-center bg-transparent border-none">
                                        <img src={seta} alt="" className="w-8 h-8" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Post;
  