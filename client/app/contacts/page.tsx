import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactsPage() {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Контакты</CardTitle>
            <CardDescription className="text-lg">
              Свяжитесь с нами удобным для вас способом
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    Контактная информация
                  </h3>
                  <div className="text-muted-foreground">
                    <p>г. Москва, ул. Строителей, 15</p>
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Телефон: +7 (495) 123-45-67</p>
                    <p>Email: info@proektstroy.ru</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Реквизиты</h3>
                  <div className="text-muted-foreground">
                    <p>ООО ТехноСтрой</p>
                    <p>ИНН 7701234567</p>
                    <p>КПП 770101001</p>
                    <p>ОГРН 1234567890123</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@mail.ru"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Введите ваше сообщение"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit">Отправить сообщение</Button>
                </form>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae7fcd1451f2c7a8b2f0b8f4e4e8f4f5a&amp;source=constructor"
                width="100%"
                height="400"
                frameBorder="0"
                className="rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
