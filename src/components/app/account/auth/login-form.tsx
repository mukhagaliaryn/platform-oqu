import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";


export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    const t = useTranslations("LoginPage");

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{t("form.title")}</CardTitle>
                    <CardDescription>{t("form.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">{t("form.email.label")}</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder={t("form.email.placeholder")}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">{t("form.password.label")}</Label>
                                    <Link
                                        href="/password-reset"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        {t("form.password.forgotLink")}
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full">
                                {t("form.actions.submit")}
                            </Button>
                            <Button variant="outline" className="w-full">
                                {t("form.actions.google")}
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            {t("form.actions.registerAction")}{" "}
                            <Link href="/register" className="underline underline-offset-4">
                                {t("form.actions.register")}
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
