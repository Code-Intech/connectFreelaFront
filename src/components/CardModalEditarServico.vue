
<template>
    <div class="modal fade" :id="'exampleModal' + idModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Seu Serviço</h1>
                    <CardErroMessage v-if="erroIf" :errorMessageCard="errorMessage"></CardErroMessage>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body overflow-y-auto" style="max-height: 80vh;">
                    <div class="d-flex justify-content-center">
                        <div class="border rounded p-3 mt-4" style="max-width: 120vh;">
                            <div class="   mb-3">
                                <loading v-if="isLoading" :message="loadingMessage" />



                                <div style="width: auto;">
                                    <input class="form-control m-2 " type="text" name="" id="" placeholder="Titulo"
                                        v-model="Servico.Titulo" required>
                                </div>
                                <div class="p-2  flex-grow-1">
                                    <div>
                                        <profissao-categoria-selector :professions="store.getters.GetProfessions"
                                            :categories="store.getters.Getcategorys"
                                            :professionsBack="this.Servico.Profissao"></profissao-categoria-selector>
                                        <!-- <button @click="submit">Enviar</button> -->
                                    </div>
                                </div>

                                <div class="p-2 flex-grow-1">
                                    <div class="mt-2">


                                        <SkillsSelector :skills="store.getters.GetSkills"
                                            :selectedSkillIds="Servico.Habilidade" />

                                        <!-- 
                                        <ul>
                                            <li v-for="skill in selectedSkills" :key="skill.idtb_habilidades">{{
                                                skill.Habilidade }}
                                            </li>
                                        </ul> -->
                                    </div>
                                </div>
                                <div class="p-2 " style="width: 300px;">
                                    <select class="form-select" aria-label="Default select example"
                                        v-model="Servico.Modalidade">
                                        <option selected>Presencial/Remoto</option>
                                        <option value="1">Remoto</option>
                                        <option value="2">Hibrido</option>
                                        <option value="3">Presencial</option>
                                    </select>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap">
                                <input class="form-control has-validation m-2 p-2" type="text" name="cep" id="cep"
                                    placeholder="CEP: 00000-000" required v-model="cep" style="max-width: 300px;"
                                    @input="this.Servico.CEP1 = this.cep">
                                <small v-if="store.getters.isMessageError" class="text-danger" id="error">CEP não
                                    encontrado</small>
                                <input class="form-control m-2 p-2" type="text" name="" id="" placeholder="Número:"
                                    style="max-width: 300px;" v-model="Servico.Numero">
                                <input class="form-control m-2 p-2" type="text" name="" id="" placeholder="Endereço:"
                                    style="max-width: 400px;" :value="store.getters.city.endereco">
                                <input class="form-control m-2 p-2" type="text" name="" id="" placeholder="Bairro:"
                                    style="max-width: 300px;" :value="store.getters.city.bairro">
                                <input class="form-control m-2 p-2" type="text" name="" id="" placeholder="Estado:"
                                    style="max-width: 300px;" :value="store.getters.city.estado">
                                <input class="form-control m-2 p-2" type="text" name="" id="" placeholder="Cidade:"
                                    style="max-width: 300px;" :value="store.getters.city.cidade">
                            </div>
                            <div class=" flex justify-content-center mb-3" style="max-width: 500px;">
                                <label for="">Estimativa de distancia em KM</label>
                                <div class="w-14rem">
                                    <InputText v-model.number="distancia" class="w-full" style="width: 100%;" />
                                    <Slider v-model="distancia" class="w-full" />
                                </div>
                            </div>
                            <div class="">
                                <label class="d-block" for="">Digite o Valor do Serviço</label>
                                <InputNumber class="" v-model="Servico.ValorServico" inputId="stacked-buttons" showButtons
                                    mode="currency" currency="BRL" />
                            </div>
                            <div class="mb-3" style="max-width: 300px;">
                                <label class="d-block" for="">Estimativa de idade</label>
                                <input v-model="Servico.EstimativaIdade" class="form-control d-block" type="number" name=""
                                    id="">
                            </div>
                            <div class="d-flex justify-content-between mb-3">
                                <div class="card flex justify-content-center" style="min-width: 300px;">
                                    <label for="">Data de Inicio</label>
                                    <!-- <Calendar v-model="Servico.DataInicio" showIcon dateFormat="dd/mm/yy" /> -->
                                    <input class="form-control" type="date" name="" id="" v-model="Servico.DataInicio">
                                </div>
                                <div class="card flex justify-content-center" style="min-width: 300px;">
                                    <label for="">Data de Termino</label>
                                    <!-- <Calendar v-model="Servico.DataTermino" showIcon dateFormat="dd/mm/yy" /> -->
                                    <input class="form-control" type="date" name="" id="" v-model="Servico.DataTermino">
                                </div>
                            </div>

                            <div class="form-floating mb-3">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                    style="height: 100px" v-model="Servico.Texto"></textarea>
                                <label for="floatingTextarea2">Comments</label>
                            </div>
                            <div>
                                <div v-if="store.getters.GetToken == null" class="d-flex flex-row-reverse">
                                    <button class="btn btn-primary" @click="$router.push({ path: '/login' })">
                                        Criar Serviço
                                    </button>
                                </div>
                                <div v-else class="d-flex flex-row-reverse">
                                    <!-- <button class="btn btn-primary" @click="EditarServico()" :disabled="ifBotao">Salvar
                                        Serviço</button> -->
                                </div>
                            </div>

                            <button class="btn btn-primary" @click="EditarServico()" :disabled="ifBotao">Salvar
                                Serviço</button>


                            <div>

                            </div>



                            <div class="border-top border-black border-1 mt-3">

                                <div>
                                    <div v-if="iffoto" class="d-flex flex-wrap">

                                        <div class="card m-auto mt-3" style="width: 18rem;" v-for="foto in fotos.fotos"
                                            :key="(foto)">
                                            <img :src="foto.image_url" class="card-img-top" alt="">
                                            <div class="card-body d-grid gap-2">
                                                <button class="btn btn-danger"
                                                    @click="dellFoto(foto.imageId)">Deletar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>







                                <div class="input-group mb-3 mt-3">
                                    <input type="file" class="form-control" id="inputGroupFile02" multiple @change="GetIMG">
                                    <label class="input-group-text" @click="UpFotosServico()">Enviar</label>
                                </div>
                            </div>




























                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from 'vuex'
import CardErroMessage from "@/components/CardErroMessage.vue"
import loading from "@/components/Loading.vue"
import ProfissaoCategoriaSelector from "@/components/ProfissaoCategoriaSelector.vue";
import SkillsSelector from "@/components/SkillsSelector"; // Certifique-se de que o caminho esteja correto


export default {
    name: "CardModalEditarServico",
    components: {
        CardErroMessage,
        loading,
        ProfissaoCategoriaSelector,
        SkillsSelector,
    },
    props: {
        idModal: {
            type: String,
            required: true,
        },
        infoServico: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            professions: [], // Preencha com suas profissões
            categories: [], // Preencha com suas habilidades
            selectedProfissoes: [],
            skills: [], // Sua lista de habilidades
            selectedSkills: [], // Habilidades selecionadas
            selectedProfissao: null,
            selectedHabilidade: null,
            distancia: 30,
            profissaoCategoriaArray: [],

            cep: "",
            Servico: {
                Profissao: {},
                Profissao2: {},
                Habilidade: {},
                Habilidade2: {},
                Modalidade: "",
                CEP1: "",
                Numero: "",
                Cidade: store.getters.city.cidade,
                Estado: store.getters.city.estado,
                Bairro: store.getters.city.bairro,
                Endereco: store.getters.city.endereco,
                EstimativaKM: this.distancia,
                ValorServico: "",
                EstimativaIdade: "",
                DataInicio: "",
                DataTermino: "",
                IMG: [],
                Texto: "",
                Titulo: "",
                IdServico: null,
            },
            InfoServicoModal: [],
            isLoading: false, // Defina isso como verdadeiro quando estiver carregando
            loadingMessage: "Carregando dados...",
            albumMessage: "Cadastrado com sucesso...",
            ifNumero: false,
            ifSkill: false,
            ifProfision: false,
            fotos: [],
            iffoto: false,
            albums: [],
            errorMessage: null,
            erroIf: false,
            AvisoErro: '',
        };
    },
    computed: {
        store() {
            return store
        },

    },
    created() {

        this.InfoServico()





    },
    watch: {
        cep() {
            console.log(this.cep)
            this.handleCep()
        },
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["dellFotosServico", "upFotosServico", "getFotosServico", "GetAddress", "clearAddressData", "UpServico", "UpServicoSkills", "getInfoServico", "UpServicoProfresions", "getcategory", "getProfessions", "getSkills"]),
        ...mapGetters(["GetToken"]),

        InfoServico() {
            this.GetFotos()
            this.InfoServicoModal = this.infoServico
            this.Servico.Titulo = this.InfoServicoModal.servicoInfo.Titulo_Servico
            this.Servico.Texto = this.InfoServicoModal.servicoInfo.Desc
            this.Servico.Modalidade = this.InfoServicoModal.servicoInfo.Remoto_Presencial
            this.Servico.Estado = this.InfoServicoModal.localidade.Estado
            this.Servico.Cidade = this.InfoServicoModal.localidade.Cidade
            this.Servico.Bairro = this.InfoServicoModal.localidade.Bairro
            this.Servico.EstimativaKM = this.InfoServicoModal.servicoInfo.Estimativa_de_distancia
            this.Servico.ValorServico = this.InfoServicoModal.servicoInfo.Estimativa_Valor
            this.Servico.EstimativaIdade = this.InfoServicoModal.servicoInfo.Estimativa_Idade
            this.Servico.DataTermino = this.InfoServicoModal.servicoInfo.Estimativa_de_termino
            this.Servico.DataInicio = this.InfoServicoModal.servicoInfo.Data_Inicio
            this.Servico.Habilidade = this.InfoServicoModal.servicoSkills
            this.Servico.Profissao = this.InfoServicoModal.servicoProfessions
        },

        async handleCep() {
            try {
                await this.GetAddress(this.cep)
                console.log(store.getters.city)
            } catch (error) {
                console.log(error)
                await this.showError(error)

            }
        },
        async GetFotos() {


            const payload = {
                id: this.idModal,
                token: this.GetToken()
            }


            try {
                await this.getFotosServico(payload)
                this.fotos = store.getters.StateFotosServico
                this.iffoto = true
            } catch (error) {
                console.log(error)
                this.iffoto = false
                this.fotos = null
                const message = error.request.response
                this.errorMessage = JSON.parse(message)
                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);
                console.log(error)

            }
        },

        ttttt() {
            console.log(this.Servico.Habilidade2)
            // console.log(this.selectedProfissao)
        },

        GetIMG(event) {

            const maxFileCount = 5; // Define o número máximo de arquivos permitidos

            if (event.target.files.length > maxFileCount) {
                alert(`Você pode selecionar no máximo ${maxFileCount} arquivos.`);
                event.target.value = ''; // Limpa a seleção
            }




            this.Servico.IMG = event.target.files
        },

        async EditarServico() {




            if (store.getters.StateEditarServicoSkill != null) {

                const skill = store.getters.StateEditarServicoSkill
                console.log(skill)
                this.Servico.Habilidade2 = []
                for (let index = 0; index < skill.length; index++) {

                    this.Servico.Habilidade2.push({ id: skill[index].idtb_habilidades })
                    console.log(this.Servico.Habilidade2)
                }


            } else {
                const skill = this.Servico.Habilidade
                console.log(skill)
                this.Servico.Habilidade2 = []
                for (let index = 0; index < skill.length; index++) {

                    this.Servico.Habilidade2.push({ id: skill[index].idtb_habilidades })
                    console.log(this.Servico.Habilidade2)
                }
            }
            if (store.getters.StateEditarServicoProfession != null) {
                const profession = store.getters.StateEditarServicoProfession
                console.log(profession)
                this.Servico.Profissao2 = []
                for (let index = 0; index < profession.length; index++) {
                    this.Servico.Profissao2.push({ id: profession[index].idtb_profissoes })
                    // console.log(this.Servico.Profissao2)

                }


            } else {
                const profession = this.Servico.Profissao
                console.log(profession)
                this.Servico.Profissao2 = []
                for (let index = 0; index < profession.length; index++) {
                    this.Servico.Profissao2.push({ id: profession[index].idtb_profissoes })
                    // console.log(this.Servico.Profissao2)

                }

            }




            this.isLoading = true;
            this.Servico.Cidade = store.getters.city.cidade,
                this.Servico.Estado = store.getters.city.estado,
                this.Servico.Bairro = store.getters.city.bairro,
                this.Servico.Endereco = store.getters.city.endereco

            const skills = new FormData();
            skills.append("habilidades", JSON.stringify(this.Servico.Habilidade2));

            const Professions = new FormData();
            Professions.append("profissoes", JSON.stringify(this.Servico.Profissao2));



            const InfoServico = new FormData();
            InfoServico.append("Remoto_Presencial", this.Servico.Modalidade);
            InfoServico.append("cep", this.Servico.CEP1);
            InfoServico.append("numero", this.Servico.Numero);
            InfoServico.append("cidade", this.Servico.Cidade);
            InfoServico.append("estado", this.Servico.Estado);
            InfoServico.append("bairro", this.Servico.Bairro);
            InfoServico.append("rua", this.Servico.Endereco);
            InfoServico.append("Estimativa_de_distancia", this.Servico.EstimativaKM);
            InfoServico.append("Estimativa_Valor", this.Servico.ValorServico);
            InfoServico.append("Estimativa_Idade", this.Servico.EstimativaIdade);
            InfoServico.append("Data_Inicio", this.Servico.DataInicio);
            InfoServico.append("Estimativa_de_Termino", this.Servico.DataTermino);
            InfoServico.append("Desc", this.Servico.Texto);
            InfoServico.append("Titulo_Servico", this.Servico.Titulo);

            const infoPayLoadSkills = {
                token: this.GetToken(),
                info: skills,
                id: this.idModal
            }
            const infoPayLoadProfessions = {
                token: this.GetToken(),
                info: Professions,
                id: this.idModal
            }
            const infoPayLoad = {
                token: this.GetToken(),
                info: InfoServico,
                id: this.idModal
            }
            try {

                await this.UpServico(infoPayLoad)
                await this.UpServicoProfresions(infoPayLoadProfessions)
                await this.UpServicoSkills(infoPayLoadSkills)
                await this.getInfoServico(this.GetToken());
                await this.getcategory(this.GetToken());
                await this.getProfessions(this.GetToken());
                await this.getSkills(this.GetToken());
                this.InfoServico()
                this.isLoading = false;
            } catch (error) {
                this.isLoading = false;
                const message = error.request.response
                this.errorMessage = JSON.parse(message)
                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);
                console.log(error)
            }




        },

        async UpFotosServico() {
            this.isLoading = true;
            const servicoImg = new FormData();


            for (let i = 0; i < this.Servico.IMG.length; i++) {
                servicoImg.append('image[]', this.Servico.IMG[i]);
                console.log(this.Servico.IMG[i])
            }



            const payload = {
                id: this.idModal,
                token: this.GetToken(),
                img: servicoImg

            }



            try {
                await this.upFotosServico(payload)
                await this.getInfoServico(this.GetToken());
                await this.getcategory(this.GetToken());
                await this.getProfessions(this.GetToken());
                await this.getSkills(this.GetToken());
                this.isLoading = false;
                this.InfoServico()
            } catch (error) {
                this.isLoading = false;
                const message = error.request.response
                this.errorMessage = JSON.parse(message)
                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);
                console.log(error)
            }




        },

        async dellFoto(id) {


            const payload = {
                id: id,
                token: this.GetToken(),

            }


            try {
                await this.dellFotosServico(payload)
                await this.getInfoServico(this.GetToken());
                await this.getcategory(this.GetToken());
                await this.getProfessions(this.GetToken());
                await this.getSkills(this.GetToken());
                this.InfoServico()
            } catch (error) {
                const message = error.request.response
                this.errorMessage = JSON.parse(message)
                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);
                console.log(error)
            }


        },





        formatData(data) {
            // Converter a string para um objeto Date
            const dataObj = new Date(data);

            // Extrair o dia, mês e ano da data
            const dia = dataObj.getDate(); // Retorna o dia do mês (1-31)
            const mes = dataObj.getMonth() + 1; // O mês é baseado em zero (0-11), então somamos 1
            const ano = dataObj.getFullYear();

            // Formatar a data no formato desejado (dia/mês/ano)
            const dataFormatada = `${ano}-${mes}-${dia}`;

            return dataFormatada;
        },
    }
};
</script>