// --- 1. USUARIOS ---
export interface Usuario {
  id: number;
  username: string;
  rol: string;
  created_at: string;
}

// --- 2. PERSONA (CONTRATISTA) ---
export interface Persona {
  id?: number;
  Nombre: string;
  Apellidos: string;
  DNI?: string;
  Telefono?: string;
  Direccion?: string;
  Correo?: string;
  ruc?: string;
}

// --- 3. ÁREAS ---
export interface Area {
  id?: number;
  nombre: string;
  detalle?: string;
}

// --- 4. CATEGORÍAS ---
export interface Categoria {
  id?: number;
  nombre: string;
}

// --- 5. ESTADOS DE TRÁMITE ---
export interface EstadoT {
  id?: number;
  nom: string;
}

// --- 6. PENALIDADES ---
export interface Penalidad {
  id?: number;
  nombre: string;
  tipo_calculo: string;
  porcentaje_dia: number;
  monto_fijo: number;
}

// --- 7. ENTREGABLES ---
export interface Entregable {
  id?: number;
  os_id: number;
  nro_entregable: number;
  descripcion?: string;
  monto_pactado: number;
  dias_plazo: number;
  fecha_presentacion?: string;
  dji_inicio_firmada?: string;
  dji_final_firmada?: string;
  nro_informe_conformidad?: string;
}

// --- 8. ORDEN DE SERVICIO (OS) ---
export interface OrdenServicio {
  id?: number;
  nro_os: string;
  nro_siaf?: string;
  tdr_codigo?: string;
  titulo_servicio: string;
  monto_total_os: number;
  fecha_notificacion?: string;
  fecha_emision?: string;
  fecha_fin_OS?: string;
  tiempo_servicio_dias?: number;
  estado_os: string;
  area_id?: number;
  meta_presupuestal?: string;
  es_confidencial: boolean;
  persona_id: number;
  // Relaciones que vienen del backend
  persona_rel?: Persona;
  entregables?: Entregable[];
  area_rel?: Area;
}

// --- 9. PAGOS ---
export interface Pago {
  id?: number;
  os_id: number;
  entregable_id?: number;
  monto_bruto: number;
  monto_mora: number;
  monto_neto_pagar: number;
}

// --- 10. REPOSITORIO ---
export interface Repositorio {
  id?: number;
  os_id: number;
  cat_id: number;
  perso_id: number;
  id_user_subio: number;
  Doc1?: string;
  Doc2?: string;
  Doc3?: string;
  Doc4?: string;
  Doc5?: string;
  Doc6?: string;
  created_at: string;
  categoria_rel?: Categoria;
}

// --- 11. AUDITORIA ---
export interface Auditoria {
  id: number;
  tabla_afectada: string;
  id_registro_afectado: number;
  id_user_login: number;
  FechaModificacion: string;
}