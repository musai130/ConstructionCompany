import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function AboutPage() {
  return (
    <section className="min-h-[calc(100vh-57px)] flex items-center p-4">
      <div className="w-full max-w-4xl mx-auto h-full">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-3xl">О нашей компании</CardTitle>
            <CardDescription className="text-lg">
              Строим будущее с 2005 года
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[calc(100%-120px)] overflow-y-auto">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Строительная компания ТехноСтрой - это команда профессионалов с
                многолетним опытом в области промышленного и гражданского
                строительства. Мы реализуем проекты любой сложности от частных
                домов до крупных коммерческих объектов.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-primary">
                        15+ лет
                      </Badge>
                      <h3 className="text-lg font-semibold">Опыта работы</h3>
                      <p className="text-sm text-muted-foreground">
                        Успешной реализации строительных проектов
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-primary">
                        500+
                      </Badge>
                      <h3 className="text-lg font-semibold">Объектов</h3>
                      <p className="text-sm text-muted-foreground">
                        Построено и сдано в эксплуатацию
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-primary">
                        Гарантия
                      </Badge>
                      <h3 className="text-lg font-semibold">5 лет</h3>
                      <p className="text-sm text-muted-foreground">
                        На все выполненные работы
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-semibold">Наши принципы</h2>
              <ul className="space-y-4 list-disc pl-6 text-muted-foreground">
                <li>Строгое соблюдение сроков</li>
                <li>Использование качественных материалов</li>
                <li>Прозрачная смета без скрытых платежей</li>
                <li>Индивидуальный подход к каждому клиенту</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
