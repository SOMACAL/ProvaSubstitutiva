namespace PROVASUBSTITUTIVA.pages;

public class cadastrar{

public cadastrar()
    {
    }

    public cadastrar(string nome,  string cpf)
    {
        Nome = nome;
        Cpf = cpf;
    }

    public int Id { get; set; }

    public string? Nome { get; set; }

    public string? Cpf { get; set; }



}