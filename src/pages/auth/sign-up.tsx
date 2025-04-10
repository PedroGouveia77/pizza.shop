import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useMutation } from "@tanstack/react-query";
import { registerRestaurant } from "@/api/register-restaurant";

const signUpForm = z.object({
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),
    email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>();
    const { mutateAsync: registerRestaurantFn } = useMutation({
        mutationFn: registerRestaurant
    })

    async function handleSignUp(data: SignUpForm) {
      try {
        await registerRestaurantFn({
            restaurantName: data.restaurantName,
            managerName: data.managerName,
            phone: data.phone,
            email: data.email,
        })
        toast.success("Restaurante cadastrado com sucesso!", {
          action: {
              label: "Login",
              onClick: () => navigate(`/sign-in?email=${data.email}`)
          }
        })
      } catch {
        toast.error("Erro ao cadastrar restaurante.");
      }
    }

    return (
        <>
            <Helmet title="Cadastro" />
            <div className="p-8">
                <div className="flex items-center gap-2 absolute right-8 top-8">
                    <Button variant="ghost" asChild>
                        <Link to="/sign-in">
                            Já tem uma conta? Acesse o painel clicando aqui.
                        </Link>
                    </Button>
                </div>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátis</h1>
                        <p className="text-sm text-muted-foreground">
                            Seja um parceiro da Pizza Shop e comece a vender agora mesmo.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                            <Input type="text" id="restaurantName" placeholder="Ex: Pizzaria Brasil" {...register("restaurantName")} />   
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="managerName">Seu nome</Label>
                            <Input type="text" id="managerName" placeholder="Seu nome aqui" {...register("managerName")} />   
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Seu celular</Label>
                            <Input type="tel" id="phone" placeholder="(DDD) 99999-9999" {...register("phone")} />   
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input type="email" id="email" placeholder="exemplo@email.com" {...register("email")} />   
                        </div>
                        
                        <Button disabled={isSubmitting} className="w-full" type="submit">Finalizar cadastro</Button>
                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar, você concorda com os nossos{' '}
                            <a href="" className="underline underline-offset-4">Termos de uso</a>
                            {' '}e{' '}
                            <a href="" className="underline">Políticas de privacidade</a>.
                        </p>
                        
                    </form>
                </div>
            </div>
            <div className="absolute right-8 bottom-8">
                <ThemeToggle />
            </div>
        </>
    )
}

