import { Component, Input } from "@angular/core";
import { Hero } from "../hero.model";

// 02 - Decorator - Informa ao angular que esta classe tem a função de componente.
@Component({
  // app-nome (prefixo padrão - Angular json).
  selector: 'app-hero-detail',
  // Conexão com o template.
  templateUrl: './hero-detail.component.html',
  // Conexão com as folhas de estilo do componente.
  styleUrls: ['./hero-detail.component.scss']
})
// 01 - Classe que armazena a lógica do componente.
export class HeroDetailComponent{
  @Input()  // Permite que o componente pai atualize dados do componente filho.
  hero?: Hero;
}

// *Todo component precisa estar registrado em algum módulo (app.module.ts - nesse caso).