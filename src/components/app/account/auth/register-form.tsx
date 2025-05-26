import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";


export function RegisterForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    const t = useTranslations("RegisterPage");
    
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
                                <Label htmlFor="username">{t("form.username.label")}</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="@username"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">{t("form.fullName.label")}</Label>
                                <Input
                                    id="full_name"
                                    type="text"
                                    placeholder={t("form.fullName.placeholder")}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">{t("form.password.label")}</Label>
                                <Input id="password" type="password" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="re_password">{t("form.rePassword.label")}</Label>
                                <Input id="re_password" type="password" required />
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
                            <Link href="/login" className="underline underline-offset-4">
                                {t("form.actions.register")}
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
