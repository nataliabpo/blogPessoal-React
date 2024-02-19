export  default interface UsuarioLogin{
    usuario: string | number | readonly string[] | undefined;
    id: number;
    nome: string;
    foto: string;
    senha: string;
    token: string;
}