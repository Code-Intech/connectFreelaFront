
<template>
    <div class="d-flex justify-content-center">
        <div class="border rounded p-3 mt-4" style="max-width: 120vh; width: 70%;">
            <div class="   mb-3">
                <loading v-if="isLoading" :message="loadingMessage" />

                <CardErroMessage v-if="erroIf" :errorMessageCard="errorMessage"></CardErroMessage>

                <div v-if="successMessage" class="alert alert-success" role="alert">
                    Serviço Criado com Sucesso
                </div>
                <div style="width: auto;">
                    <input class="form-control m-2 " type="text" name="" id="" placeholder="Titulo"
                        v-model="Servico.Titulo">
                </div>
                <div class="p-2  flex-grow-1">
                    <div class="card flex justify-content-center">
                        <MultiSelect v-model="selectedProfissao" :options="profissaoCategoriaArray" filter
                            optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" display="chip"
                            placeholder="Profissão" class="w-full md:w-20rem" @chance="onChange($event)"
                            :maxSelectedLabels="3">
                            <template #optiongroup="slotProps">
                                <div class="flex align-items-center">
                                    <div>{{ slotProps.option.label }}</div>
                                </div>
                            </template>
                        </MultiSelect>
                    </div>
                </div>
                <div class="p-2 flex-grow-1">
                    <div class="card flex justify-content-center">
                        <MultiSelect v-model="selectedHabilidade" :options="store.getters.GetSkills" display="chip" filter
                            optionLabel="Habilidade" placeholder="Habilidades necessarias" :maxSelectedLabels="3"
                            class="w-full md:w-20rem" />
                    </div>
                </div>
                <div class="p-2 " style="width: 300px;">
                    <select class="form-select" aria-label="Default select example" v-model="Servico.Modalidade">
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
                <small v-if="store.getters.isMessageError" class="text-danger" id="error">CEP não encontrado</small>
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
                <InputNumber class="" v-model="Servico.ValorServico" inputId="stacked-buttons" showButtons mode="currency"
                    currency="BRL" />
            </div>
            <div class="mb-3" style="max-width: 300px;">
                <label class="d-block" for="">Estimativa de idade</label>
                <input v-model="Servico.EstimativaIdade" class="form-control d-block" type="number" name="" id="">
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
            <div class="mb-3">
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02" @change="GetIMG" multiple max="5">
                    <label class="input-group-text" for="inputGroupFile02">Upload</label>
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
                    <button class="btn btn-primary" @click="Salvar()" :disabled="ifBotao">Criar
                        Serviço</button>
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
export default {
    name: "CriarServicoComponent",
    components: {
        CardErroMessage,
        loading,
    },
    data() {
        return {
            selectedProfissao: null,
            selectedHabilidade: null,
            distancia: 30,
            profissaoCategoriaArray: [],
            cep: "",
            Servico: {
                Profissao: {},
                Habilidade: {},
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
            isLoading: false, // Defina isso como verdadeiro quando estiver carregando
            loadingMessage: "Carregando dados...",
            albumMessage: "Cadastrado com sucesso...",
            ifNumero: false,
            ifSkill: false,
            ifProfision: false,
            successMessage: false,
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
        const professions = store.getters.GetProfessions;
        const categorys = store.getters.Getcategorys;

        this.profissaoCategoriaArray = Array.from(new Set(professions.map(profissao => profissao.tb_categoria_idtb_categoria)))
            .map(categoriaID => {
                const categoria = categorys.find(cat => cat.idtb_categoria === categoriaID);
                return {
                    label: categoria.Categoria,
                    code: categoria.idtb_categoria, // Use a propriedade correta para o código da categoria
                    items: professions
                        .filter(profissao => profissao.tb_categoria_idtb_categoria === categoriaID)
                        .map(profissao => ({
                            label: profissao.Profissao,
                            value: profissao.idtb_profissoes, // Use a propriedade correta para o código da categoria
                        })),
                };
            });
    },
    watch: {
        cep() {
            console.log(this.cep)
            this.handleCep()
        },
    },
    methods: {
        validateOnBack: Boolean,
        ...mapActions(["GetAddress", "clearAddressData", "CreateServico", "CreateServicoIMG", "getInfoServico"]),
        ...mapGetters(["GetToken"]),

        async handleCep() {
            try {
                await this.GetAddress(this.cep)
            } catch (error) {
                console.log(error)
                await this.showError(error)
            }
        },
        Salvar() {


            if (this.selectedHabilidade != null && this.selectedHabilidade != null) {

                this.Servico.Habilidade = this.selectedHabilidade.map((Habi) => ({ id: Habi.idtb_habilidades }));
                this.Servico.Profissao = this.selectedProfissao.map((Prof) => ({ id: Prof.value }));
                this.Servico.EstimativaKM = this.distancia;
                this.createServico();

            } else {
                this.errorMessage = ["Campos Habilidade ou Profissão em Branco!! "]
                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);
            }


        },
        onChange: function (event) {

            const skill = event.target.value;
            this.Servico.Habilidade = skill.map((Habi) => Habi.idtb_habilidades);

        },
        GetIMG(event) {

            const maxFileCount = 5; // Define o número máximo de arquivos permitidos

            if (event.target.files.length > maxFileCount) {
                alert(`Você pode selecionar no máximo ${maxFileCount} arquivos.`);
                event.target.value = ''; // Limpa a seleção
            }




            this.Servico.IMG = event.target.files
        },
        async createServico() {

            this.isLoading = true;
            this.Servico.Cidade = store.getters.city.cidade,
                this.Servico.Estado = store.getters.city.estado,
                this.Servico.Bairro = store.getters.city.bairro,
                this.Servico.Endereco = store.getters.city.endereco

            const InfoServico = new FormData();
            InfoServico.append("profissoes", JSON.stringify(this.Servico.Profissao));
            InfoServico.append("habilidades", JSON.stringify(this.Servico.Habilidade));
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

            const infoPayLoad = {
                token: this.GetToken(),
                info: InfoServico
            }
            try {

                await this.CreateServico(infoPayLoad)
                if (this.Servico.IMG.length > 0) {

                    await this.getInfoServico(this.GetToken())
                    const id = store.getters.StateServico
                    this.Servico.IdServico = id[id.length - 1].servicoInfo.idtb_servico

                    await this.createServicoImg()
                }
                this.isLoading = false;
                this.successMessage = true
                setTimeout(() => {
                    this.successMessage = false
                }, 4000);
                setTimeout(() => {
                    this.$router.push("/");
                }, 3000);
            } catch (error) {
                this.isLoading = false;
                const message = error.request.response
                this.errorMessage = JSON.parse(message)
                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);

            }










        },
        async createServicoImg() {
            this.isLoading = true;
            const servicoImg = new FormData();


            for (let i = 0; i < this.Servico.IMG.length; i++) {
                servicoImg.append('image[]', this.Servico.IMG[i]);
            }
            const infoPayLoadIMG = {
                token: this.GetToken(),
                img: servicoImg,
                id: this.Servico.IdServico
            }
            try {
                await this.CreateServicoIMG(infoPayLoadIMG)
                this.isLoading = false;
            } catch (error) {
                this.isLoading = false;
                const message = error.request.response
                this.errorMessage = JSON.parse(message)
                this.erroIf = true
                setTimeout(() => {
                    this.erroIf = false
                }, 4000);
            }
        },
        findById(id) {
            const idIMG = id
            return this.items.find(item => item.idIMG === idIMG);
        },
    }
};
</script>