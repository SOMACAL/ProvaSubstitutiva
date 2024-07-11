using System.Security.Cryptography;
using pages.aluno;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();
var app = builder.Build();

app.MapGet("/", () => "prova");

app.MapPost("/api/aluno/cadastrar", ([FromBody] aluno aluno,
    [FromServices] AppDataContext ctx) =>
{
    ctx.aluno.Add(aluno);
    ctx.SaveChanges();
    return Results.Created($"/aluno/{aluno.Id}", aluno);
});

app.MapGet("/api/aluno/listar", ([FromServices] AppDataContext ctx) =>
{
    return Results.Ok(ctx.aluno.ToList());
});

app.MapPost("/api/imc/cadastrar", ([FromBody] imc imc,
    [FromServices] AppDataContext ctx) =>
{
    aluno? cpf =
        ctx.aluno.Find(folha.cpfid);

    if (funcionario is null)
        return Results.NotFound("aluno não encontrado");

    imc.aluno = aluno;

    //Calcular o salário bruto
    imc = peso * altura;

    //Calcular o IRRF
    if (imc.aluno <= 18,5)
    if (imc.aluno <= 24,9)
    if (imc.aluno <= 29,9)
    if (imc.aluno <= 39,9)
     if (imc.aluno <= 40,0);



 

    
   

   

app.MapGet("/api/aluno/listar", ([FromServices] AppDataContext ctx) =>
{
    return Results.Ok(ctx.imc.Include(x => x.aluno).ToList());
});




app.Run();