import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import atlasImg from "@assets/Портфолио_Дубинина_Анастасия_page-0003_1776332016636.jpg";
import denisImg from "@assets/Портфолио_Дубинина_Анастасия_page-0005_1776332016637.jpg";
import andragogikaImg from "@assets/Портфолио_Дубинина_Анастасия_page-0007_1776332016637.jpg";
import zadachaImg from "@assets/Портфолио_Дубинина_Анастасия_page-0008_1776332016638.jpg";
import vikingImg from "@assets/Портфолио_Дубинина_Анастасия_page-0009_1776332016638.jpg";
import urbanistImg from "@assets/Портфолио_Дубинина_Анастасия_page-0011_1776332016639.jpg";

const projects = [
  {
    id: "01",
    title: "Atlas Education",
    subtitle: "Корпоративный курс для менеджеров",
    image: atlasImg,
    tag: "Методология",
    bullets: [
      "Разработала учебный план для новых технико-коммерческих менеджеров компании в Италии",
      "12 модулей, 50 уроков — переработка материалов и написание нового контента",
      "Экосистема развития: онлайн-курс, семинары, наставничество, база знаний",
      "Предложена система обучения → практика → корректировка",
    ],
  },
  {
    id: "02",
    title: "Денис Смирнов",
    subtitle: "Мини-курс для коуча ICF",
    image: denisImg,
    tag: "Методология",
    bullets: [
      "Создала концепцию и программу мини-курса для лид-магнита и набора аудитории",
      "8 презентаций к видеоурокам в стиле эксперта",
      "3 гайда и инструмент «Дневник рефлексии»",
      "Разработан сайт для английской версии курса — от позиционирования до дизайна",
    ],
  },
  {
    id: "03",
    title: "Андрагогика: основы",
    subtitle: "Менеджмент запуска асинхронного курса",
    image: andragogikaImg,
    tag: "Менеджмент",
    bullets: [
      "Спроектирована дорожная карта проекта в формате диаграммы Ганта",
      "Составлен план задач от идеи до запуска с фиксацией сроков и ответственных",
      "Система отслеживания статусов работы над материалами",
      "Шаблон дорожной карты используется теперь в других проектах эксперта",
    ],
  },
  {
    id: "04",
    title: "Задача. Опыт. Результат.",
    subtitle: "Менеджмент запуска синхронного курса",
    image: zadachaImg,
    tag: "Менеджмент",
    bullets: [
      "Составлен план задач от идеи до запуска с фиксацией сроков и ответственных",
      "Спроектирована SJM (дорожная карта студента) совместно с методистом",
      "Разработан сайт совместно с дизайнером (техническая сборка)",
      "Разработан дизайн для досок Holst для вовлечения студентов",
    ],
  },
  {
    id: "05",
    title: "VikingWood",
    subtitle: "Запуск курса по столярному делу",
    image: vikingImg,
    tag: "Продакт",
    bullets: [
      "Конкурентный анализ, анализ ЦА, позиционирование курса",
      "Распаковка эксперта, совместная разработка учебного плана",
      "3 тарифных плана, расчёт финмодели",
      "Итог: продажи полностью оправдали оптимальный исход по выручке",
    ],
  },
  {
    id: "06",
    title: "Urbanist",
    subtitle: "Разработка новой услуги для бизнеса",
    image: urbanistImg,
    tag: "Продакт",
    bullets: [
      "Предложила и разработала услугу «Экспресс-дизайн» с 0 до продаж",
      "Бизнес-модель и финансовая модель для инвестора с расчётом доходности",
      "50+ проектов с клиентами, привлечены специалисты-дизайнеры",
      "В 2021: прошла отбор в акселератор МФТИ Физтех.Старт",
    ],
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="flex items-end gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-6xl font-display font-black text-white/10 leading-none">02.</span>
          <h2 className="text-3xl font-display font-bold uppercase tracking-wider mb-1">Портфолио</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-display font-black text-primary leading-none">{p.id}.</span>
                  <span className="text-xs bg-primary text-black font-bold px-2 py-1 uppercase tracking-wider">{p.tag}</span>
                </div>
                <h3 className="text-xl font-display font-black mb-1">{p.title}</h3>
                <p className="text-sm text-white/60 mb-4">{p.subtitle}</p>

                <motion.ul
                  initial={false}
                  animate={{ height: active === i ? "auto" : 0, opacity: active === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/80 mb-2">
                      <span className="mt-1.5 w-1.5 h-1.5 shrink-0 bg-primary" />
                      {b}
                    </li>
                  ))}
                </motion.ul>

                <div className="text-xs text-primary uppercase tracking-widest mt-2 group-hover:opacity-100 opacity-60 transition-opacity">
                  {active === i ? "Скрыть" : "Подробнее"} →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
