import Postagem from "./Postagem";

export default interface Usuario {
    id: number;
    nome: string;
    usuario: string | undefined;
    foto: string;
    senha: string;
    postagem?: Postagem | null;
  }