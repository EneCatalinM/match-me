'use client'

import { registerUser } from "@/app/actions/authActions";
import { registerSchema, RegisterSchema } from "@/lib/schemas/RegisterSchema";
import { handleFormServerErrors } from "@/lib/util";
import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid, isSubmitting },
    } = useForm<RegisterSchema>({
        // resolver: zodResolver(registerSchema),
        mode: "onTouched",
    });

    const router = useRouter();

    const onSubmit = async (data: RegisterSchema) => {
        const result = await registerUser(data)

        if (result.status === 'success') {
            console.log("User regiostered successfully")
            router.push(
                "/login"
            )
        } else {
            handleFormServerErrors(result, setError);
        }
    };
    return (
        <Card className="w-3/5 mx-auto">
            <CardHeader className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-2 items-center text-default">
                    <div className="flex flex-row items-center gap-3">
                        <GiPadlock size={30} />
                        <h1 className="text-3xl font-semibold">
                            Register
                        </h1>
                    </div>
                    <p className="text-neutral-500">
                        Welcome to NextMatch
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <Input
                            defaultValue=""
                            label="Name"
                            variant="bordered"
                            {...register("name")}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message}
                        />
                        <Input
                            defaultValue=""
                            label="Email"
                            variant="bordered"
                            {...register("email")}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message}
                        />
                        <Input
                            defaultValue=""
                            label="Password"
                            variant="bordered"
                            type="password"
                            {...register("password")}
                            isInvalid={!!errors.password}
                            errorMessage={
                                errors.password?.message
                            }
                        />
                        <Button
                            isLoading={isSubmitting}
                            isDisabled={!isValid}
                            fullWidth
                            color="default"
                            type="submit"
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}

export default RegisterForm;